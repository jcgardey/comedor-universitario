from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from menus.models import Menu, MenuOnSale, Site, MenuAlreadyOnSaleException
from django.utils.dateparse import parse_date
from menus.serializers import MenuOnSaleSerializer


class CreateMenuOnSaleAPI(APIView):

    def post(self, request):
        site = Site.objects.get(pk=request.data['site'])
        try:
            menu_sales = self.create_sale(request.data, site)
        except MenuAlreadyOnSaleException:
            return Response({'message': 'menu already on sale on the date', 'error': 'menu-already-on-sale' }, status=status.HTTP_400_BAD_REQUEST)
        return Response(MenuOnSaleSerializer(menu_sales).data)
    
    def create_sale(self, sale_data, site):
        menu = Menu.objects.get(pk=sale_data['menu'])
        sale_date = parse_date(sale_data['sale_date'])
        return menu.create_sale(sale_date, sale_data['stock'] , site)
   

class ListMenuOnSaleAPI(generics.ListAPIView):
    serializer_class = MenuOnSaleSerializer

    def get_queryset(self):
        filterFields = {}
        if self.request.query_params.get('sale_date', None) is not None:
            filterFields['sale_date'] = parse_date(self.request.query_params.get('sale_date'))
        return MenuOnSale.objects.filter(**filterFields)