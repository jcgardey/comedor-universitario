from django.db import models
from django.contrib.auth.models import AbstractUser, Group 
from .managers import UserManager

# Create your models here.

class User(AbstractUser):
    username = None
    dni = models.CharField(unique=True, max_length=20)
    name = models.CharField(max_length=256, default='User')

    groups = models.ManyToManyField(Group)


    USERNAME_FIELD = 'dni'

    objects = UserManager()

    def get_full_name(self):
        return self.name
    

    def is_in_group(self, group_name):
        return self.groups.filter(name=group_name).exists()



