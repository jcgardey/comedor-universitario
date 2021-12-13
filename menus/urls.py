from django.urls import path, include
from rest_framework import routers
from menus.api.menu_on_sale import CreateMenuOnSaleAPI, ListMenuOnSaleAPI
from menus.api.menu import CreateMenuAPI, ListMenuAPI


urlpatterns = [
    path('api/menus/new', CreateMenuAPI.as_view()),
    path('api/menus', ListMenuAPI.as_view()),
    path('api/menus_on_sale/new', CreateMenuOnSaleAPI.as_view()),
    path('api/menus_on_sale', ListMenuOnSaleAPI.as_view()),
]