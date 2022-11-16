from django.db import models
from menus.models import Menu
from sites.models import Site

from users.models import ClientProfile

# Create your models here.
class Purchase(models.Model):
    date = models.DateTimeField(auto_now=True)
    client = models.ForeignKey(ClientProfile, related_name='purchases', on_delete=models.CASCADE)

class Ticket(models.Model):
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    site = models.ForeignKey(Site, null=True, on_delete=models.SET_NULL)
    date = models.DateField(null=False)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    take_away = models.BooleanField()
    purchase = models.ForeignKey(Purchase, related_name='tickets', on_delete=models.CASCADE)

