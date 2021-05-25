from rest_framework import permissions



class IsUserInGroups(permissions.IsAuthenticated):

    allowed_groups = ['']

    def has_permission(self, request, view):
        return super().has_permission(request, view) and len(list(filter(lambda group: request.user.is_in_group(group), self.allowed_groups))) > 0   


class IsSuperAdminUser(IsUserInGroups):

    allowed_groups = ['super_admin']

class IsSiteAdminUser(IsUserInGroups):

    allowed_groups = ['site_admin', 'super_admin']

class IsClientUser(IsUserInGroups):

    allowed_groups = ['client']


