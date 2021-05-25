import React, { useEffect, useState } from 'react';
import { getAllSites } from '../../services/site';
import { getMenusByName } from '../../services/menu';
import { createMenuOnSale } from '../../services/menuOnSale';
import {
  Container,
  FormField,
  Label,
  TextInput,
  Select,
  PrimaryButton,
} from '../Layout';
import { SelectableListOption, SelectableList } from '../utils/SelectableList';
import { MenuItem } from '../menu/MenuItem';
import styled from 'styled-components';

export const EditMenuOnSale = ({ date, onSubmit }) => {
  const [sites, setSites] = useState([]);
  const [menu, setMenu] = useState(null);
  const [menuName, setMenuName] = useState('');
  const [availableMenus, setAvailableMenus] = useState([]);
  const [stock, setStock] = useState(0);
  const [site, setSite] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    createMenuOnSale({ ...menuOnSale, date }).then((response) => {
      setMenus((previousState) => [...previousState, ...response.data]);
    });
    onSubmit();
  };

  useEffect(() => {
    getAllSites().then((response) => {
      setSites(response.data);
    });
  }, []);

  const onMenuNameChange = (e) => {
    setMenuName(e.target.value);
    getMenusByName(e.target.value).then((response) => {
      setAvailableMenus(response.data);
    });
  };

  const MenuInList = styled(MenuItem)`
    height: 100px;
  `;

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>Men&uacute;</Label>
          <TextInput
            type="text"
            onChange={onMenuNameChange}
            value={menuName}
            name="menu"
          ></TextInput>
          {availableMenus.length > 0 && (
            <SelectableList>
              {availableMenus.map((menu) => (
                <SelectableListOption key={menu.id}>
                  <MenuInList menu={menu} />
                </SelectableListOption>
              ))}
            </SelectableList>
          )}
        </FormField>
        <FormField style={{ height: '120px' }}>
          {menu && <MenuInList menu={menu} />}
        </FormField>
        <FormField>
          <Label>Cantidad</Label>
          <TextInput
            type="text"
            onChange={(e) => setStock(e.target.value)}
            value={stock}
            name="stock"
          ></TextInput>
        </FormField>
        <FormField>
          <Label>Sede</Label>
          <Select name="site" onChange={(e) => setSite(e.target.value)}>
            <option disabled selected value>
              Seleccionar
            </option>
            {sites.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField>
          <PrimaryButton type="submit">Crear Venta</PrimaryButton>
        </FormField>
      </form>
    </Container>
  );
};
