from rest_framework import serializers
from .models import Menu, MenuOnSale
from sites.serializers import SiteSerializer

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = fields = '__all__'

class MenuOnSaleSerializer(serializers.ModelSerializer):
    menu = MenuSerializer()
    site = SiteSerializer()

    class Meta:
        model = MenuOnSale
        fields = '__all__'


