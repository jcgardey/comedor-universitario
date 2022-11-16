from django.urls import path

from purchases.api import CreatePurchaseAPI


urlpatterns = [
    path('new', CreatePurchaseAPI.as_view(), name='create')
]
