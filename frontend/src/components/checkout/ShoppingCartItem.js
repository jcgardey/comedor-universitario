import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import {
  ItemImage,
  MenuName,
  Price,
  RemoveFromCart,
  TakeAway,
} from '../cart/ShoppingCartItem';

const ItemContainer = styled.div`
  display: flex;
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 0.5em;
  margin: 1em 0;
`;

const ItemPrice = styled(Price)`
  margin: 0.2em 1em;
  width: 15%;
`;

const MenuInfo = styled.div`
  width: 50%;
`;

export const ShoppingCartItem = ({ item }) => {
  return (
    <ItemContainer>
      <ItemImage image={item.menu.image} />
      <MenuInfo>
        <MenuName>{item.menu.name}</MenuName>
        {item.takeAway && <TakeAway>Vianda</TakeAway>}
      </MenuInfo>
      <ItemPrice>&#36;{item.price}</ItemPrice>
      <RemoveFromCart item={item} />
    </ItemContainer>
  );
};
