from rest_framework.serializers import ModelSerializer
from users.models import SiteAdminProfile, User, UserProfile
from django.contrib.auth.models import Group
from sites.serializers import SiteSerializer


class GroupSerializer(ModelSerializer):
    class Meta:
        fields = ('name',)
        model = Group


class UserSerializer(ModelSerializer):

    groups = GroupSerializer(many=True)

    class Meta:
        fields = ('id', 'dni', 'password', 'name', 'groups')
        model = User
        extra_kwargs = {'password': {'write_only': True}}

class UserProfileSerializer(UserSerializer):
    user = UserSerializer()
    
    class Meta:
        fields = ('user',)
        model = UserProfile

class SiteAdminProfileSerializer(UserProfileSerializer):
    site = SiteSerializer()
    class Meta:
        fields = ('site','user')
        model = SiteAdminProfile