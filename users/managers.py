from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):

    def create_user(self, dni, password, **extra_fields):
        if not dni:
            raise ValueError('The DNI must be set')
        user = self.model(dni=dni, **extra_fields)
        user.set_password(password)
        user.save()
        return user