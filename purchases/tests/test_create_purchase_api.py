from rest_framework.test import APITestCase
from rest_framework import status
from menus.models import Menu
from sites.models import Site
from users.models import ClientProfile, User
from datetime import date, timedelta
from django.contrib.auth.models import Group
from users.groups import CLIENT

class CreatePurchaseAPITest(APITestCase):

    def setUp(self):
        menu = Menu.objects.create(name='Chicken with salad')
        menu.save()
        self.site = Site.objects.create(name='Bosque')
        self.site.save()
        self.menu_on_sale = menu.create_sale(date.today() + timedelta(days=5), 2, self.site, 100)
        self.menu_on_sale.save()

        Group.objects.get_or_create(name=CLIENT)
        user = User.objects.create_user('36645978', '123')
        user.groups.add(Group.objects.get(name=CLIENT))
        user.save()
        self.client_profile = ClientProfile.objects.create(user=user)
        self.client_profile.save()
        self.client.force_authenticate(user=user)
    
    def test_successfull_purchase(self):
        response = self.client.post('/api/purchases/new', {'client': self.client_profile.id, 'tickets': [{'menu_on_sale': self.menu_on_sale.id, 'take_away': False}]  }, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        response = self.client.post('/api/purchases/new', {'client': self.client_profile.id, 'tickets': [{'menu_on_sale': self.menu_on_sale.id, 'take_away': False}]  }, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, {'error': 'duplicated_menus_on_sale', 'data': [self.menu_on_sale.sale_date]})
    
    def test_purchase_with_duplicated_menus(self):
        response = self.client.post('/api/purchases/new', {'client': self.client_profile.id, 'tickets': [{ 'menu_on_sale': self.menu_on_sale.id, 'take_away': False }, { 'menu_on_sale': self.menu_on_sale.id, 'take_away': False }]  }, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    

    def test_menu_out_of_stock(self):
        menu = Menu.objects.create(name='Cheese burger')
        menu.save()
        menu_on_sale_without_stock = menu.create_sale(date.today() + timedelta(days=4), 0, self.site, 100)
        response = self.client.post('/api/purchases/new', {'client': self.client_profile.id, 'tickets': [{'menu_on_sale': menu_on_sale_without_stock.id, 'take_away': False}]  }, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, {'error': 'menus_out_of_stock', 'data': [menu_on_sale_without_stock.id]})


    


        
