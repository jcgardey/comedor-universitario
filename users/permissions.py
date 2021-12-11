from rest_framework import permissions

from users.groups import CLIENT, SITE_ADMIN, SUPER_ADMIN
from users.models import SiteAdminProfile



class IsUserInGroups(permissions.IsAuthenticated):

    allowed_groups = ['']

    def has_permission(self, request, view):
        return super().has_permission(request, view) and len(list(filter(lambda group: request.user.is_in_group(group), self.allowed_groups))) > 0   


class IsSuperAdminUser(IsUserInGroups):

    allowed_groups = [SUPER_ADMIN]

class IsSiteAdminUser(IsUserInGroups):

    allowed_groups = [SITE_ADMIN]

class IsClientUser(IsUserInGroups):

    allowed_groups = [CLIENT]


class IsSiteAdminAssignedToSite(permissions.BasePermission):

    def has_object_permission(self, request, view, site):
        user_profile = SiteAdminProfile.objects.get(user=request.user)
        return super().has_object_permission(request, view, site) and user_profile.site == site


