import React from 'react';
import NavigationBarLoggedUser from './NavigationBarLoggedUser';
import { NavLink } from './NavigationBar';

const NavigationBarClient = () => (
  <NavigationBarLoggedUser>
    <NavLink to="/calendar">Mis Tickets</NavLink>
    <NavLink to="/menus">Mis Compras</NavLink>
    <NavLink to="/">Menus</NavLink>
  </NavigationBarLoggedUser>
);

export default NavigationBarClient;
