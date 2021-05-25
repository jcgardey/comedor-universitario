from django.test import TestCase
from .models import Menu, MenuOnSale, Site, MenuAlreadyOnSaleException
from datetime import date


class MenuOnSaleTest(TestCase):

    def setUp(self):
        self.menu = Menu.objects.create(name='Chicken with salad')
        self.site = Site.objects.create(name='Bosque')
    
    def test_create_sale(self):
        menu_on_sale = self.menu.create_sale(date(2021,4,20), 200, self.site)
        self.assertEqual(menu_on_sale.stock, 200)
        self.assertEqual(menu_on_sale.sale_date, date(2021,4,20))
        self.assertEqual(menu_on_sale.site, self.site)
        with self.assertRaises(MenuAlreadyOnSaleException):
            self.menu.create_sale(date(2021,4,20), 200, self.site)
