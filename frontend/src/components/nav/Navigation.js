import React from 'react';
import { useSelector } from 'react-redux';
import { isUserClient, isUserSiteAdmin } from '../../utils/auth';
import NavigationBarAnnonymousUser from './NavigationBarAnnonymousUser';
import NavigationBarClient from './NavigationBarClient';
import NavigationBarSiteAdminUser from './NavigationBarSiteAdminUser';

export const Navigation = () => {
  const user = useSelector((state) => state.auth);
  if (!user.isAuthenticated) return <NavigationBarAnnonymousUser />;
  if (isUserSiteAdmin(user)) return <NavigationBarSiteAdminUser />;
  if (isUserClient(user)) return <NavigationBarClient />;
};
