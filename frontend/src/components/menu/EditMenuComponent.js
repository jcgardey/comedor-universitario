import React, { useState } from 'react';
import { PrimaryButton, Container, FlexContainer } from '../Layout';
import { FormField, FieldError, Label, TextInput, Select } from '../Form';
import styled from 'styled-components';
import { createMenuComponent } from '../../services/menu';
import colors from '../../styles/colors';
import { MenuComponentInList } from './MenuComponentInList';
import { useForm } from '../../hooks/useForm';

const PreviewContainer = styled(Container)`
  padding: 1em;
  border-left: 2px solid ${colors.grey2};
`;
const FlexStretchContainer = styled(FlexContainer)`
  align-items: stretch;
`;

const EditMenuComponent = ({ onEdit, className }) => {
  const [image, setImage] = useState('');

  const { register, handleSubmit, values, errors } = useForm();

  const addComponent = () => {
    createMenuComponent({ ...values, image });
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
          <Select {...register('component_type', 'text', { required: true })}>
            <option>Entrada</option>
            <option>Plato Principal</option>
            <option>Postre</option>
            <option>Bebida</option>
          </Select>
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
          <PrimaryButton type="button" onClick={handleSubmit(addComponent)}>
            Crear
          </PrimaryButton>
        </FormField>
      </Container>
      <PreviewContainer>
        <MenuComponentInList component={{ ...values, image }} />
      </PreviewContainer>
    </FlexStretchContainer>
  );
};

export default EditMenuComponent;
