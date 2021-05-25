from django.urls import path, include
from rest_framework import routers
from .views import MenuAPI, CreateMenuOnSaleAPI, MenuComponentViewSet

router = routers.DefaultRouter()
router.register('menu_component', MenuComponentViewSet, basename='MenuComponent')

urlpatterns = [
    path('api/menu', MenuAPI.as_view()),
    path('api/menu_on_sale', CreateMenuOnSaleAPI.as_view()),
    path('api/', include(router.urls))
]