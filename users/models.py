from django.db import models
from django.contrib.auth.models import AbstractUser, Group

from purchases.exceptions import DuplicatedMenusOnSaleException, MenusNotAvailableException 
from .managers import UserManager
from sites.models import Site

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

class UserProfile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)

class SiteAdminProfile(UserProfile):
    site = models.ForeignKey(Site, null=True, on_delete=models.SET_NULL)

class ClientProfile(UserProfile):

    def create_ticket(self, ticket_data, purchase):
        menu_on_sale = ticket_data['menu_on_sale'] 
        return purchase.tickets.create(menu=menu_on_sale.menu, site=menu_on_sale.site, date=menu_on_sale.sale_date, price=menu_on_sale.price, take_away=ticket_data['take_away'])

    def create_purchase(self, tickets):
        menus_on_sale = list(map(lambda t: t['menu_on_sale'], tickets))
        valid_menus_on_sale = []
        duplicated_menus_on_sale = [ menu_on_sale for menu_on_sale in menus_on_sale if menu_on_sale in valid_menus_on_sale or valid_menus_on_sale.append(menu_on_sale)]
        if len(duplicated_menus_on_sale) > 0:
            raise DuplicatedMenusOnSaleException(duplicated_menus_on_sale)
        
        menus_on_sale_out_of_stock = list(filter(lambda m: m.stock == 0, menus_on_sale))
        
        if len(menus_on_sale_out_of_stock) > 0:
            raise MenusNotAvailableException(menus_on_sale_out_of_stock)
        
        purchase = self.purchases.create()
        list(map(lambda ticket_data: self.create_ticket(ticket_data, purchase), tickets))
        return purchase

