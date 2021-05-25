import React from 'react';
import { ItemInList, ItemName } from './ItemInList';


export const MenuItem = ({menu, className}) => (
  <ItemInList className={className}>
    <ItemName>{menu.name}</ItemName>
    {menu.components.map(menuComponent => <p><span>{menuComponent.component_type}: </span>{menuComponent.name}</p> )}
  </ItemInList>
);
