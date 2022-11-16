from rest_framework.views import APIView
from rest_framework.response import Response
from purchases.serializers import InputPurchaseSerializer, OutputPurchaseSerializer
from purchases.services import create_purchase


class CreatePurchaseAPI(APIView):

    def post(self, request):
        serializer = InputPurchaseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        purchase = create_purchase(**serializer.validated_data)
        return Response(OutputPurchaseSerializer(purchase).data)
        