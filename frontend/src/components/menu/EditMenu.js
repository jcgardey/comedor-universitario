import React, { useState } from 'react';
import { PrimaryButton, Container, FlexContainer } from '../Layout';
import {
  FormField,
  FieldError,
  Label,
  TextInput,
  Select,
  RadioItemLabel,
} from '../Form';
import styled from 'styled-components';
import { createMenu } from '../../services/menu';
import { useForm } from '../../hooks/useForm';
import { Menu } from './Menu';

const PreviewContainer = styled(Container)`
  padding: 1em;
`;
const FlexStretchContainer = styled(FlexContainer)`
  align-items: stretch;
`;

const EditMenu = ({ onEdit, className }) => {
  const [image, setImage] = useState('');

  const { register, handleSubmit, values, errors } = useForm();

  const submitMenu = () => {
    createMenu({ ...values, image }).catch((error) =>
      console.log(error.response)
    );
    onEdit({ ...values, image });
  };

  return (
    <FlexStretchContainer>
      <Container className={className}>
        <FormField>
          <Label>Nombre</Label>
          <TextInput {...register('name', 'text', { required: true })} />
          {errors.name && <FieldError>{errors.name.join(',')}</FieldError>}
        </FormField>
        <FormField>
          <Label>Tipo</Label>
          <Select {...register('menu_type', 'text', { required: true })}>
            <option>Entrada</option>
            <option>Plato Principal</option>
            <option>Postre</option>
            <option>Bebida</option>
          </Select>
        </FormField>
        <FormField>
          <input {...register('suitable_vegetarian', 'checkbox')} />
          <RadioItemLabel>Apto Vegetarinos</RadioItemLabel>
        </FormField>
        <FormField>
          <input {...register('suitable_celiac', 'checkbox')} />
          <RadioItemLabel>Apto Celiacos</RadioItemLabel>
        </FormField>
        <FormField>
          <Label>Imagen</Label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/png, image/jpeg"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </FormField>
        <FormField>
          <PrimaryButton type="button" onClick={handleSubmit(submitMenu)}>
            Crear
          </PrimaryButton>
        </FormField>
      </Container>
      <PreviewContainer>
        <Menu menu={{ ...values, image }} />
      </PreviewContainer>
    </FlexStretchContainer>
  );
};

export default EditMenu;
