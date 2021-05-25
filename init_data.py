import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'comedor_universitario.settings')
django.setup()

from users.models import User
from django.contrib.auth.models import Group
from sites.models import Site

super_admin = User.objects.create_user('38679198', '123')
super_admin.groups.add(Group.objects.get(name='super_admin'))
super_admin.save()

site_admin = User.objects.create_user('11111111', '123')
site_admin.groups.add(Group.objects.get(name='site_admin'))
site_admin.save()

client = User.objects.create_user('36645978', '123')
client.groups.add(Group.objects.get(name='client'))
client.save()

bosque = Site(name='Bosque')
bosque.save()
everton = Site(name='Everton')
everton.save()