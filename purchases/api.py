from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from purchases.serializers import InputPurchaseSerializer, OutputPurchaseSerializer
from purchases.services import create_purchase
from purchases.exceptions import DuplicatedMenusOnSaleException, MenusNotAvailableException
from users.permissions import IsClientUser


class CreatePurchaseAPI(APIView):

    permission_classes = [IsClientUser]

    def post(self, request):
        serializer = InputPurchaseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        try:
            purchase = create_purchase(**serializer.validated_data)
            return Response(OutputPurchaseSerializer(purchase).data, status=status.HTTP_201_CREATED)
        except DuplicatedMenusOnSaleException as d:
            return Response({'error': 'duplicated_menus_on_sale', 'data': list(map(lambda menu_on_sale: menu_on_sale.sale_date, d.menus_on_sale))}, status=status.HTTP_400_BAD_REQUEST)
        except MenusNotAvailableException as m:
            return Response({'error': 'menus_out_of_stock', 'data': list(map(lambda menu_on_sale: menu_on_sale.id, m.menus_on_sale))}, status=status.HTTP_400_BAD_REQUEST)



        
        