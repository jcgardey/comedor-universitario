from django.db import models
from sites.models import Site


class MenuAlreadyOnSaleException(Exception):

    def __init__(self, menu, site, sale_date):
        self.menu = menu
        self.site = site
        self.sale_date = sale_date



# Create your models here.
class Menu(models.Model):
    name = models.CharField(max_length=100)
    suitable_vegetarian = models.BooleanField(default=False)
    suitable_celiac = models.BooleanField(default=False)
    menu_type = models.CharField(max_length=100)
    image = models.ImageField(upload_to='menus', null=True)

    def create_sale(self, date, stock, site):
        if (self.sales.filter(sale_date=date, menu = self, site = site)):
            raise MenuAlreadyOnSaleException(self,site,date)
        return self.sales.create(sale_date=date, stock=stock, site=site)

class MenuOnSale(models.Model):
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE, related_name='sales')
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    sale_date = models.DateField()
    stock = models.IntegerField()


