import React from 'react';
import { UserSection } from './NavigationBarLoggedUser';
import NavigationBar, { NavLink } from './NavigationBar';
import LoggedUser from './LoggedUser';
import { ShoppingCart } from '../cart/ShoppingCart';

const NavigationBarClient = () => (
  <NavigationBar>
    <div>
      <NavLink to="/calendar">Mis Tickets</NavLink>
      <NavLink to="/menus">Mis Compras</NavLink>
      <NavLink to="/">Menus</NavLink>
    </div>
    <UserSection>
      <ShoppingCart />
      <LoggedUser />
    </UserSection>
  </NavigationBar>
);

export default NavigationBarClient;
