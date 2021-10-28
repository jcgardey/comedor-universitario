import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllMenus } from '../../services/menu';
import { Container, SecondaryLink, Title } from '../Layout';
import NavigationBarSiteAdminUser from '../nav/NavigationBarSiteAdminUser';
import { MenuItem } from './MenuItem';

const MenuList = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2em;
`;

const NewMenuButton = styled(SecondaryLink)`
  margin: 2em 4em;
  display: inline-block;
`;

const MenuListPage = () => {
  useEffect(() => {
    getAllMenus().then((response) => setMenus(response.data));
  }, []);

  const [menus, setMenus] = useState([]);

  return (
    <>
      <NavigationBarSiteAdminUser />
      <Container>
        <Title>Men&uacute;s Disponibles</Title>
        <NewMenuButton to="/menus/new">
          Nuevo Men&uacute; <i className="fas fa-plus-circle fa-sm"></i>
        </NewMenuButton>
        <MenuList>
          {menus.map((menu, i) => (
            <MenuItem key={i} menu={menu} />
          ))}
        </MenuList>
      </Container>
    </>
  );
};

export default MenuListPage;
