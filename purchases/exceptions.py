
from shutil import ExecError


class MenusNotAvailableException(Exception):

    def __init__(self, menus_on_sale):
        self.menus_on_sale = menus_on_sale

class DuplicatedMenusOnSaleException(Exception):
    def __init__(self, menus_on_sale):
        self.menus_on_sale = menus_on_sale