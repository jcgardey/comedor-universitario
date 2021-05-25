import React from 'react';
import { ItemName, ItemDescription, ItemInList } from './ItemInList';

export const MenuComponentInList = ({
  component,
  className,
  onClick,
  onDelete = false,
}) => {
  const image = component.image ? component.image : '/media/placeholder.jpg';
  const imageSrc =
    typeof image === 'object' ? URL.createObjectURL(image) : image;

  return (
    <ItemInList
      className={className}
      imageSrc={imageSrc}
      onClick={onClick}
      onDelete={onDelete}
    >
      <ItemName>{component.name}</ItemName>
      <ItemDescription>{component.component_type}</ItemDescription>
    </ItemInList>
  );
};
