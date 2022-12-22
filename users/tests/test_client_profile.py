
from menus.models import Menu
from django.test import TestCase
from purchases.exceptions import DuplicatedMenusOnSaleException, MenusNotAvailableException
from purchases.services import create_purchase

from sites.models import Site
from users.models import ClientProfile
from datetime import date, timedelta

class ClientProfileTest(TestCase):
    
    def setUp(self):
        self.menu = Menu.objects.create(name='Chicken with salad')
        self.site = Site.objects.create(name='Bosque')
        self.client = ClientProfile.objects.create()
        self.menu_on_sale = self.menu.create_sale(date.today() + timedelta(days=5), 2, self.site, 100)
        self.menu_on_sale_without_stock = self.menu.create_sale(date.today() + timedelta(days=10), 0, self.site, 100)
    
    def test_create_purchase_valid(self):
        ticket_data = {'menu_on_sale': self.menu_on_sale, 'take_away':True}
        previous_stock = self.menu_on_sale.stock
        purchase = self.client.create_purchase([ticket_data])
        self.assertEqual(self.menu_on_sale.stock, previous_stock - 1)
        self.assertEqual(purchase.client, self.client)
        self.assertEqual(purchase.tickets.first().site, self.site)
        self.assertEqual(purchase.tickets.first().menu, self.menu)
        self.assertEqual(purchase.tickets.first().date, self.menu_on_sale.sale_date)

    def test_create_purchase_duplicated_menu(self):
        ticket_data = {'menu_on_sale': self.menu_on_sale, 'take_away':True}
        another_ticket_data = {'menu_on_sale': self.menu_on_sale, 'take_away': False}
        with self.assertRaises(DuplicatedMenusOnSaleException):
            self.client.create_purchase([ticket_data, another_ticket_data])
    
    def test_create_purchase_without_stock(self):
        ticket_data = {'menu_on_sale': self.menu_on_sale_without_stock, 'take_away':True}
        with self.assertRaises(MenusNotAvailableException):
            self.client.create_purchase([ticket_data])




