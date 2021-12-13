from rest_framework import serializers
from .models import Menu, MenuOnSale

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = fields = '__all__'

class MenuOnSaleSerializer(serializers.ModelSerializer):
    menu = MenuSerializer()
    class Meta:
        model = MenuOnSale
        fields = '__all__'


