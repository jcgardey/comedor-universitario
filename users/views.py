from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import UserSerializer

# Create your views here.

class LoggedUser(APIView):

    def get(self, request):
        return Response(UserSerializer(request.user).data)



