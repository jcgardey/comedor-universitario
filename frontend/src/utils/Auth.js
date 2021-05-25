export const SITE_ADMIN = 'site_admin';
export const SUPER_ADMIN = 'super_admin';
export const CLIENT = 'client';


class Auth {

  constructor(user) {
    this.user = user;
  }


  isUserAuthenticated() {
    return this.user.isAuthenticated;
  }

  isUserInGroup(groupName) {
    return this.user.groups ? this.user.groups.filter(group => group.name === groupName).length > 0 : false;
  }

  isUserSiteAdmin() {
    return this.isUserInGroup(SITE_ADMIN);
  }

  isUserSuperAdmin() {
    return this.isUserInGroup(SUPER_ADMIN);
  }

}

export default Auth;