import React, { useState } from 'react';
import { Row, SectionTitle, FlexContainer } from '../Layout';
import { FieldError, FormGroup } from '../Form';
import styled from 'styled-components';
import EditMenuComponent from './EditMenuComponent';
import Modal from '../Modal';
import { MenuComponentInList } from './MenuComponentInList';
import { MenuComponentCombobox } from './MenuComponentCombobox';
import colors from '../../styles/colors';

const ComponentItemsContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  margin: 2em;
  font-size: 12px;
`;

const SelectedMenuComponent = styled(MenuComponentInList)`
  width: 40%;
  //height: 7em;
  border: 1px solid transparent;
  background-color: white;
  border-radius: 5px;
  margin: 0.5em 0;
  &:hover {
    border-color: ${colors.lightgrey};
  }
`;

const MenuComponentsSelection = ({ menuComponentsField, className }) => {
  const [addMenuComponent, setAddMenuComponent] = useState(false);

  const showComponentModal = () => setAddMenuComponent(true);

  const hideComponentModal = () => setAddMenuComponent(false);

  const onMenuComponentSelect = (menuComponent) =>
    menuComponentsField.onChange([...menuComponentsField.value, menuComponent]);

  const onMenuComponentDelete = (menuComponent) =>
    menuComponentsField.onChange(
      menuComponentsField.value.filter((each) => each.id !== menuComponent.id)
    );

  const onEdit = (menuComponent) => {
    hideComponentModal();
    onMenuComponentSelect(menuComponent);
  };

  return (
    <Row className={className}>
      <FormGroup>
        <SectionTitle>Componentes</SectionTitle>
        <MenuComponentCombobox
          onSelect={onMenuComponentSelect}
          secondaryAction={showComponentModal}
        />
        {menuComponentsField.errors && (
          <FieldError>{menuComponentsField.errors.join(',')}</FieldError>
        )}
      </FormGroup>
      <ComponentItemsContainer>
        {menuComponentsField.value.map((component) => (
          <SelectedMenuComponent
            key={component.id}
            component={component}
            onDelete={() => onMenuComponentDelete(component)}
          />
        ))}
      </ComponentItemsContainer>
      <Modal
        show={addMenuComponent}
        handleClose={hideComponentModal}
        title={'Crear Componente'}
      >
        <EditMenuComponent onEdit={onEdit} />
      </Modal>
    </Row>
  );
};

export default styled(MenuComponentsSelection)`
  margin: 4em 0;
`;
