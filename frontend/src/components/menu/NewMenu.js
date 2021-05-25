import React, { useState } from 'react';
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

const NewMenu = () => {
  const [name, setName] = useState('');
  const [nameErrors, setNameErrors] = useState([]);
  const [suitableVegetarian, setSuitableVegetarian] = useState(false);
  const [suitableCeliac, setSuitableCeliac] = useState(false);
  const [menuComponents, setMenuComponents] = useState([]);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createMenu({
        name: name,
        components: menuComponents,
        suitable_vegetarian: suitableVegetarian,
        suitable_celiac: suitableCeliac,
      })
    );
  };

  const onMenuComponentSelect = (menuComponent) =>
    setMenuComponents([...menuComponents, menuComponent]);

  const onMenuComponentDelete = (menuComponent) =>
    setMenuComponents(
      menuComponents.filter((each) => each.id !== menuComponent.id)
    );

  return (
    <>
      <NavigationBarSiteAdminUser />
      <Container>
        <Title>Crear Men&uacute;</Title>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <FormField>
              <Label>Nombre</Label>
              <TextInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
              {nameErrors.map((error) => (
                <FieldError>{error}</FieldError>
              ))}
            </FormField>
            <FormField>
              <input
                type="checkbox"
                onChange={(e) => setSuitableVegetarian(e.target.checked)}
                name="suitable_vegetarian"
              />
              <RadioItemLabel>Apto Vegetarinos</RadioItemLabel>
            </FormField>
            <FormField>
              <input
                type="checkbox"
                onChange={(e) => setSuitableCeliac(e.target.checked)}
                name="suitable_celiac"
              />
              <RadioItemLabel>Apto Celiacos</RadioItemLabel>
            </FormField>
          </FormGroup>
          <MenuComponentsSelection
            menuComponents={menuComponents}
            onSelect={onMenuComponentSelect}
            onDelete={onMenuComponentDelete}
          />
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
