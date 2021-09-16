import React from 'react';
import { useDispatch } from 'react-redux';
import { createMenu } from '../../actions/menu';
import {
  FormField,
  TextInput,
  Label,
  PrimaryButton,
  Container,
  Title,
  RadioItemLabel,
  FieldError,
  FormGroup,
} from '../Layout';
import MenuComponentsSelection from './MenuComponentsSelection';
import NavigationBarSiteAdminUser from '../nav/NavigationBarSiteAdminUser';
import { useForm } from '../../hooks/useForm';

const NewMenu = () => {
  const { register, handleSubmit, values, errors } = useForm();
  const menuComponentsField = register('menuComponents', 'array', {
    notEmpty: { message: 'Ingrese al menos un componente' },
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      createMenu({
        name: values.name,
        components: values.menuComponents,
        suitable_vegetarian: values.suitable_vegetarian,
        suitable_celiac: values.suitable_celiac,
      })
    );
  };
  return (
    <>
      <NavigationBarSiteAdminUser />
      <Container>
        <Title>Crear Men&uacute;</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormField>
              <Label>Nombre</Label>
              <TextInput
                {...register('name', 'text', {
                  required: { message: 'El nombre es obligatorio' },
                })}
              />
              {errors.name && <FieldError>{errors.name.join(',')}</FieldError>}
            </FormField>
            <FormField>
              <input {...register('suitable_vegetarian', 'checkbox')} />
              <RadioItemLabel>Apto Vegetarinos</RadioItemLabel>
            </FormField>
            <FormField>
              <input {...register('suitable_celiac', 'checkbox')} />
              <RadioItemLabel>Apto Celiacos</RadioItemLabel>
            </FormField>
          </FormGroup>
          <MenuComponentsSelection menuComponentsField={menuComponentsField} />
          <FormGroup style={{ backgroundColor: 'transparent' }}>
            <FormField>
              <PrimaryButton type="submit">Confirmar</PrimaryButton>
            </FormField>
          </FormGroup>
        </form>
      </Container>
    </>
  );
};

export default NewMenu;
