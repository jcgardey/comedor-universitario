from django.urls import path, include
from rest_framework import routers
from .views import MenuAPI, MenuComponentViewSet
from menus.api.menu_on_sale import CreateMenuOnSaleAPI, ListMenuOnSaleAPI

router = routers.DefaultRouter()
router.register('menu_component', MenuComponentViewSet, basename='MenuComponent')

urlpatterns = [
    path('api/menu', MenuAPI.as_view()),
    path('api/menus_on_sale/new', CreateMenuOnSaleAPI.as_view()),
    path('api/menus_on_sale', ListMenuOnSaleAPI.as_view()),
    path('api/', include(router.urls))
]