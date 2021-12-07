from django.urls import path, include
from rest_framework import routers
from .views import MenuComponentViewSet
from menus.api.menu_on_sale import CreateMenuOnSaleAPI, ListMenuOnSaleAPI
from menus.api.menu import CreateMenuAPI, ListMenuAPI

router = routers.DefaultRouter()
router.register('menu_component', MenuComponentViewSet, basename='MenuComponent')

urlpatterns = [
    path('api/menus/new', CreateMenuAPI.as_view()),
    path('api/menus', ListMenuAPI.as_view()),
    path('api/menus_on_sale/new', CreateMenuOnSaleAPI.as_view()),
    path('api/menus_on_sale', ListMenuOnSaleAPI.as_view()),
    path('api/', include(router.urls))
]