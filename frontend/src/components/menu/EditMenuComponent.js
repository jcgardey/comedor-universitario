import React, { useState } from 'react';
import {
  FormField,
  PrimaryButton,
  Label,
  TextInput,
  Select,
  Container,
  FlexContainer,
} from '../Layout';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createMenuComponent } from '../../actions/menu';
import colors from '../../styles/colors';
import { MenuComponentInList } from './MenuComponentInList';

const PreviewContainer = styled(Container)`
  padding: 1em;
  border-left: 2px solid ${colors.grey2};
`;
const FlexStretchContainer = styled(FlexContainer)`
  align-items: stretch;
`;

const EditMenuComponent = ({ onEdit, className }) => {
  const [componentName, setComponentName] = useState('');
  const [componentType, setComponentType] = useState('');
  const [componentImage, setComponentImage] = useState('');

  const dispatch = useDispatch();

  const menuComponent = {
    name: componentName,
    component_type: componentType,
    image: componentImage,
  };

  const addComponent = () => {
    dispatch(createMenuComponent(menuComponent));
    onEdit(menuComponent);
  };
  return (
    <FlexStretchContainer>
      <Container className={className}>
        <FormField>
          <Label>Nombre</Label>
          <TextInput
            type="text"
            value={componentName}
            onChange={(e) => setComponentName(e.target.value)}
            name="name"
          />
        </FormField>
        <FormField>
          <Label>Tipo</Label>
          <Select
            type="text"
            value={componentType}
            onChange={(e) => setComponentType(e.target.value)}
            name="component_type"
          >
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
            onChange={(e) => setComponentImage(e.target.files[0])}
          />
        </FormField>
        <FormField>
          <PrimaryButton type="button" onClick={addComponent}>
            Crear
          </PrimaryButton>
        </FormField>
      </Container>
      <PreviewContainer>
        <MenuComponentInList component={menuComponent} />
      </PreviewContainer>
    </FlexStretchContainer>
  );
};

export default EditMenuComponent;
