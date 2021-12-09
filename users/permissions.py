from rest_framework import permissions

from users.groups import CLIENT, SITE_ADMIN, SUPER_ADMIN



class IsUserInGroups(permissions.IsAuthenticated):

    allowed_groups = ['']

    def has_permission(self, request, view):
        return super().has_permission(request, view) and len(list(filter(lambda group: request.user.is_in_group(group), self.allowed_groups))) > 0   


class IsSuperAdminUser(IsUserInGroups):

    allowed_groups = [SUPER_ADMIN]

class IsSiteAdminUser(IsUserInGroups):

    allowed_groups = [SITE_ADMIN, SUPER_ADMIN]

class IsClientUser(IsUserInGroups):

    allowed_groups = [CLIENT]


