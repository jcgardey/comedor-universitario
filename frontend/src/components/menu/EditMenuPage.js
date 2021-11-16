import React from 'react';
import { createMenu } from '../../services/menu';
import { PrimaryButton, Container, Title } from '../Layout';
import {
  FormField,
  TextInput,
  Label,
  FieldError,
  FormGroup,
  RadioItemLabel,
} from '../Form';
import MenuComponentsSelection from './MenuComponentsSelection';
import NavigationBarSiteAdminUser from '../nav/NavigationBarSiteAdminUser';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router';

const EditMenuPage = () => {
  const { register, handleSubmit, values, errors } = useForm();
  const history = useHistory();

  const menuComponentsField = register('menuComponents', 'array', {
    notEmpty: { message: 'Ingrese al menos un componente' },
  });

  const onSubmit = () => {
    createMenu({
      name: values.name,
      components: values.menuComponents,
      suitable_vegetarian: values.suitable_vegetarian,
      suitable_celiac: values.suitable_celiac,
    });
    history.push('/menus');
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

export default EditMenuPage;
