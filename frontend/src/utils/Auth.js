export const SITE_ADMIN = 'site_admin';
export const SUPER_ADMIN = 'super_admin';
export const CLIENT = 'client';

export const isUserInGroup = (user, groupName) =>
  user.groups
    ? user.groups.filter((group) => group.name === groupName).length > 0
    : false;

export const isUserSiteAdmin = (user) => isUserInGroup(user, SITE_ADMIN);

export const isUserSuperAdmin = (user) => isUserInGroup(user, SUPER_ADMIN);

export const isUserClient = (user) => isUserInGroup(user, CLIENT);
