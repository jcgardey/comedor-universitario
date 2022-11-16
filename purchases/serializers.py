from rest_framework import serializers
from menus.models import MenuOnSale
from purchases.models import Purchase, Ticket

from sites.serializers import SiteSerializer
from menus.serializers import MenuSerializer


class InputTicketSerializer(serializers.Serializer):
    menu_on_sale = serializers.PrimaryKeyRelatedField(queryset=MenuOnSale.objects.all())
    take_away = serializers.BooleanField()
    
    
class InputPurchaseSerializer(serializers.ModelSerializer):
    tickets = InputTicketSerializer(many=True)

    class Meta:
        model = Purchase
        fields = ('client','tickets')

class OutputTicketSerializer(serializers.ModelSerializer):
    site = SiteSerializer()
    menu = MenuSerializer()

    class Meta:
        model = Ticket
        fields = ('date', 'site', 'menu', 'price')

class OutputPurchaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Purchase
        fields = ('date', 'tickets')