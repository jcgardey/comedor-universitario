import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput } from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuComponentsByName } from '../../actions/menu';
import { MenuComponentInList } from './MenuComponentInList';
import { MenuComponentName, MenuComponentNameHighlighted } from './Style';
import { SelectableListOption, SelectableList } from '../utils/SelectableList';

const MenuComponentList = styled(SelectableList)`
  width: 40%;
`;

let SecondaryOption = ({ enteredText, onClick, className }) => (
  <SelectableListOption onClick={onClick} className={className}>
    <MenuComponentName>
      Crear Componente{' '}
      <MenuComponentNameHighlighted>
        &quot;{enteredText}&quot;
      </MenuComponentNameHighlighted>
    </MenuComponentName>
  </SelectableListOption>
);

SecondaryOption = styled(SecondaryOption)`
  padding: 0.5em;
`;

export const MenuComponentCombobox = ({ onSelect, secondaryAction }) => {
  const [showOptionsList, setShowOptionsList] = useState(false);
  const [menuComponentName, setMenuComponentName] = useState('');

  const dispatch = useDispatch();

  const menuComponents = useSelector(
    (state) => state.menuComponent.menuComponents
  );

  const onTextChange = (e) => {
    setMenuComponentName(e.target.value);
    setShowOptionsList(!!e.target.value);
    dispatch(getMenuComponentsByName(e.target.value));
  };

  const selectComponent = (component) => {
    setShowOptionsList(false);
    onSelect(component);
  };

  const handleSecondaryAction = () => {
    setShowOptionsList(false);
    secondaryAction();
  };

  return (
    <>
      <TextInput
        name="menu_component_name"
        value={menuComponentName}
        placeholder="Buscar Componente"
        onChange={onTextChange}
      />
      {showOptionsList && (
        <MenuComponentList>
          {menuComponents.length ? (
            menuComponents.map((component) => (
              <SelectableListOption
                key={component.id}
                onClick={() => selectComponent(component)}
              >
                <MenuComponentInList component={component} />
              </SelectableListOption>
            ))
          ) : (
            <SecondaryOption
              enteredText={menuComponentName}
              onClick={handleSecondaryAction}
            />
          )}
        </MenuComponentList>
      )}
    </>
  );
};

export default MenuComponentCombobox;
