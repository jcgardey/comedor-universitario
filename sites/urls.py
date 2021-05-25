from .api import SiteAPI
from django.urls import path

urlpatterns = [
    path('api/site', SiteAPI.as_view()),
]