import React from 'react';
import NavigationBarLoggedUser from './NavigationBarLoggedUser';
import { NavLink } from './NavigationBar';

const NavigationBarSiteAdminUser = () => (
  <NavigationBarLoggedUser>
    <NavLink to="/calendar">Calendario</NavLink>
    <NavLink to="/menus">Men&uacute;s</NavLink>
    <NavLink to="/">Ventas</NavLink>
  </NavigationBarLoggedUser>
);

export default NavigationBarSiteAdminUser;
