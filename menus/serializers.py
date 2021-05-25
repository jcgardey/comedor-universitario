from rest_framework import serializers
from .models import Menu, MenuComponent, MenuOnSale

class MenuComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuComponent
        fields = ('id','name', 'component_type', 'image')


class MenuCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

class MenuRetrievalSerializer(serializers.ModelSerializer):
    components = MenuComponentSerializer(many=True)
    class Meta:
        model = Menu
        fields = '__all__'

class MenuOnSaleSerializer(serializers.ModelSerializer):
    menu = MenuRetrievalSerializer()
    class Meta:
        model = MenuOnSale
        fields = '__all__'


