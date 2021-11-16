import React, { useEffect, useState } from 'react';
import { getAllSites } from '../../services/site';
import { getMenusByName } from '../../services/menu';
import { Container, PrimaryButton } from '../Layout';
import { SelectableListOption, SelectableList } from '../utils/SelectableList';
import { Menu } from '../menu/Menu';
import { createMenuOnSaleAction } from '../../actions/menusOnSale';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { FieldErrors, FormField, Label, TextInput, Select } from '../Form';
import { dateToLocalString, stringToDate } from '../../utils/common';

export const EditMenuOnSale = ({ selectedDate, onEdit }) => {
  const [sites, setSites] = useState([]);
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [menuName, setMenuName] = useState('');
  const [availableMenus, setAvailableMenus] = useState([]);

  const { register, handleSubmit, values, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      createMenuOnSaleAction({
        ...values,
        menu: values.menu.id,
        date: stringToDate(values.date),
      })
    );
    onEdit();
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

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label>Fecha</Label>
          <TextInput
            {...register(
              'date',
              'text',
              {
                required: { message: 'Ingrese una fecha' },
                date: true,
              },
              dateToLocalString(selectedDate)
            )}
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
        </FormField>
        <FormField>
          {values.menu && (
            <Menu menu={values.menu} showName={false} showActions={false} />
          )}
          <FieldErrors errors={errors.menu} />
        </FormField>
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
