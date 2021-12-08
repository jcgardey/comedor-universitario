import React, { useEffect, useState } from 'react';
import { getAllSites } from '../../services/site';
import { getMenusByName } from '../../services/menu';
import { Container, PrimaryButton } from '../Layout';
import { SelectableListOption, SelectableList } from '../utils/SelectableList';
import { Menu } from '../menu/Menu';
import { createMenuOnSaleAction } from '../../actions/menusOnSale';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import {
  FieldErrors,
  FormField,
  Label,
  TextInput,
  Select,
  FieldError,
} from '../Form';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.min.css';
import '../react-datepicker/react-datepicker-custom.css';
import { createMenuOnSale } from '../../services/menuOnSale';
import styled from 'styled-components';

const ErrorCentered = styled(FieldError)`
  text-align: center;
`;

export const EditMenuOnSale = ({ selectedDate, onEdit }) => {
  const [sites, setSites] = useState([]);
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [menuName, setMenuName] = useState('');
  const [availableMenus, setAvailableMenus] = useState([]);

  const [invalidMenuOnSale, setInvalidMenuOnSale] = useState('');

  const { register, handleSubmit, values, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = () => {
    createMenuOnSale({
      ...values,
      menu: values.menu.id,
      date: values.date,
    })
      .then((response) => {
        dispatch(createMenuOnSaleAction(response.data));
        onEdit();
      })
      .catch((error) => setInvalidMenuOnSale(error.response.data.error));
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
      setShowMenuOptions(response.data.length > 0);
    });
  };

  const menuSelected = () => {
    setShowMenuOptions(false);
  };

  const menuField = register(
    'menu',
    'object',
    {
      notNull: { message: 'Seleccione el menu a vender' },
    },
    null,
    menuSelected
  );
  const siteField = register('site', 'text', {
    required: { message: 'Elija una sede' },
  });

  const dateField = register('date', 'object', {}, selectedDate);

  return (
    <Container>
      {invalidMenuOnSale === 'menu-already-on-sale' && (
        <ErrorCentered>
          El men&uacute; ya est&aacute; en venta en la fecha y sede elegida
        </ErrorCentered>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label>Fecha</Label>
          <DatePicker
            selected={dateField.value}
            onChange={dateField.onChange}
            dateFormat={'dd/MM/yyyy'}
            customInput={<TextInput />}
          />
          <FieldErrors errors={errors.date} />
        </FormField>
        <FormField>
          <Label>Men&uacute;</Label>
          <TextInput
            type="text"
            onChange={onMenuNameChange}
            value={menuName}
            name="menu"
          ></TextInput>
          {showMenuOptions && (
            <SelectableList>
              {availableMenus.map((menu) => (
                <SelectableListOption
                  key={menu.id}
                  onClick={() => menuField.onChange(menu)}
                >
                  <Menu
                    key={menu.id}
                    menu={menu}
                    showName={false}
                    showActions={false}
                  />
                </SelectableListOption>
              ))}
            </SelectableList>
          )}
          <FieldErrors errors={errors.menu} />
        </FormField>
        {values.menu && (
          <FormField>
            <Menu menu={values.menu} showName={false} showActions={false} />
          </FormField>
        )}
        <FormField>
          <Label>Cantidad</Label>
          <TextInput
            {...register('stock', 'text', {
              integer: {
                message: 'La cantidad debe ser un numero mayor a 0',
                min: 1,
              },
            })}
          ></TextInput>
          <FieldErrors errors={errors.stock} />
        </FormField>
        <FormField>
          <Label>Sede</Label>
          <Select name={siteField.name} onChange={siteField.onChange}>
            <option value="">Seleccionar Sede</option>
            {sites.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </Select>
          <FieldErrors errors={errors.site} />
        </FormField>
        <FormField>
          <PrimaryButton type="submit">Crear Venta</PrimaryButton>
        </FormField>
      </form>
    </Container>
  );
};
