from django.shortcuts import render
from django.db import transaction

from rest_framework.response import Response
from rest_framework import generics, viewsets, status
from rest_framework.views import APIView
from .serializers import MenuCreationSerializer, MenuRetrievalSerializer, MenuComponentSerializer, MenuOnSaleSerializer
from .models import Menu, MenuComponent, MenuOnSale, Site, MenuAlreadyOnSaleException

from django.utils.dateparse import parse_date

from rest_framework.permissions import IsAuthenticated
from users.permissions import IsSiteAdminUser

# Create your views here.

def get_queryset_for_class(request, classObject):
    queryset = classObject.objects.all()
    name_param = request.query_params.get("name", None)
    if name_param is not None:
        queryset = classObject.objects.none() if not name_param else queryset.filter(name__contains=name_param)
    return queryset

class MenuAPI(generics.ListCreateAPIView):
    #queryset = Menu.objects.all()

    def get_serializer_class(self):
        return MenuCreationSerializer if self.request.method == 'POST' else MenuRetrievalSerializer
    
    def get_queryset(self):
        return get_queryset_for_class(self.request, Menu)
            
class MenuComponentViewSet(viewsets.ModelViewSet):
    serializer_class = MenuComponentSerializer
    permission_classes = [IsSiteAdminUser]

    def get_queryset(self):
        return get_queryset_for_class(self.request, MenuComponent
        )


class CreateMenuOnSaleAPI(APIView):

    @transaction.atomic
    def post(self, request):
        site = Site.objects.get(pk=request.data['site'])
        errors = []
        #menu_sales = [self.create_sale(sale_data, site, errors) for sale_data in request.data['menus']]
        menu_sales = [self.create_sale(request.data, site, errors)]
        if errors:
            transaction.set_rollback(True)
            return Response(errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(MenuOnSaleSerializer(menu_sales, many=True).data)
    
    def create_sale(self, sale_data, site, errors):
        menu = Menu.objects.get(pk=sale_data['menu'])
        sale_date = parse_date(sale_data['sale_date'])
        try:
            return menu.create_sale(sale_date, sale_data['stock'] , site)
        except MenuAlreadyOnSaleException as error:
            errors.append({'menu': error.menu.name, 'site': error.site.name, 'sale_date': error.sale_date}) 
    

    def get(self, request):
        filterFields = {}
        if request.query_params.get('sale_date', None) is not None:
            filterFields['sale_date'] = parse_date(request.query_params.get('sale_date'))
        if request.query_params.get('site', None) is not None:
            filterFields['site'] = request.query_params.get('site')
        return Response(MenuOnSaleSerializer(MenuOnSale.objects.filter(**filterFields), many=True).data)  









