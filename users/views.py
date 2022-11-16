from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from users.groups import CLIENT, SITE_ADMIN, SUPER_ADMIN

from users.models import ClientProfile, SiteAdminProfile, UserProfile

from .serializers import SiteAdminProfileSerializer,UserProfileSerializer

# Create your views here.

class LoggedUser(APIView):

    def get_serializer_for_user_group(self, userGroup):
        serializers = { SITE_ADMIN: SiteAdminProfileSerializer, SUPER_ADMIN: UserProfileSerializer, CLIENT: UserProfileSerializer }
        return serializers[userGroup]
    
    def get_profile_for_user_group(self, userGroup):
        profiles = { SITE_ADMIN: SiteAdminProfile, SUPER_ADMIN: UserProfile, CLIENT: ClientProfile }
        return profiles[userGroup]



    def get(self, request):
        user_profile_class = self.get_profile_for_user_group(request.user.groups.first().name)
        user_profile_serializer = self.get_serializer_for_user_group(request.user.groups.first().name)
        return Response( user_profile_serializer(user_profile_class.objects.get(user= request.user)).data )



