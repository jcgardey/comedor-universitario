import os
import django
from users.groups import CLIENT, SITE_ADMIN, SUPER_ADMIN

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'comedor_universitario.settings')
django.setup()

from users.models import SiteAdminProfile, User, UserProfile
from django.contrib.auth.models import Group
from sites.models import Site

bosque = Site(name='Bosque')
bosque.save()
everton = Site(name='Everton')
everton.save()

site_admin = User.objects.create_user('11111111', '123')
site_admin.groups.add(Group.objects.get(name=SITE_ADMIN))
site_admin.save()
site_admin_profile = SiteAdminProfile.objects.create(site=bosque, user=site_admin)
site_admin_profile.save()

client = User.objects.create_user('36645978', '123')
client.groups.add(Group.objects.get(name=CLIENT))
client.save()
client_profile = UserProfile.objects.create(user=client)
client_profile.save()

super_admin = User.objects.create_user('38679198', '123')
super_admin.groups.add(Group.objects.get(name=SUPER_ADMIN))
super_admin.save()
super_admin_profile = UserProfile.objects.create(user=super_admin)
super_admin_profile.save()
