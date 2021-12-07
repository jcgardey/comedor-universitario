from django.shortcuts import render
from django.db import transaction
from rest_framework import generics, viewsets
from .serializers import MenuCreationSerializer, MenuRetrievalSerializer, MenuComponentSerializer, MenuOnSaleSerializer
from .models import Menu, MenuComponent



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











