from rest_framework.serializers import ModelSerializer
from users.models import User
from django.contrib.auth.models import Group


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