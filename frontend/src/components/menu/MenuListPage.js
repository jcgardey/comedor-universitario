import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllMenus } from '../../services/menu';
import { Container, SecondaryLink, Title } from '../Layout';
import { Menu } from './Menu';
import EditMenu from './EditMenu';
import Modal from '../Modal';

export const MenuGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 2em;
`;

const NewMenuButton = styled(SecondaryLink)`
  margin: 2em 4em;
  display: inline-block;
`;

const MenuListPage = () => {
  const [addMenu, setAddMenu] = useState(false);

  const hideModal = () => {
    setAddMenu(false);
  };

  const createMenu = (menu) => {
    setMenus([...menus, menu]);
  };

  const showMenuModal = () => setAddMenu(true);

  useEffect(() => {
    getAllMenus().then((response) => setMenus(response.data));
  }, []);

  const [menus, setMenus] = useState([]);

  return (
    <Container>
      <Title>Men&uacute;s Disponibles</Title>
      <NewMenuButton onClick={showMenuModal}>
        Nuevo <i className="fas fa-plus-circle fa-sm"></i>
      </NewMenuButton>
      <MenuGrid>
        {menus.map((menu, i) => (
          <Menu key={i} menu={menu} />
        ))}
      </MenuGrid>
      <Modal show={addMenu} handleClose={hideModal} title={'Crear Menu'}>
        <EditMenu onEdit={createMenu} />
      </Modal>
    </Container>
  );
};

export default MenuListPage;
