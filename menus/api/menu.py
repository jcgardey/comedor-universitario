from rest_framework import generics
from menus.serializers import MenuCreationSerializer, MenuRetrievalSerializer
from menus.models import Menu

class CreateMenuAPI(generics.ListCreateAPIView):
    serializer_class = MenuCreationSerializer

    
class ListMenuAPI(generics.ListAPIView):
    serializer_class = MenuRetrievalSerializer

    def get_queryset(self):
        name_param = self.request.query_params.get("name", None)
        return Menu.objects.all() if name_param is None else Menu.objects.filter(name__contains=name_param)
            
  

            