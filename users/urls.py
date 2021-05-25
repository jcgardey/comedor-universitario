from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import LoggedUser

urlpatterns = [
    path('api/auth/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/user', LoggedUser.as_view(), name='logged_user')
]