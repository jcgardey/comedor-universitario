import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeItemFromCartAction } from '../../actions/shoppingCart';
import colors from '../../styles/colors';
import { ISOtoLocalDate } from '../../utils/common';

const Flex = styled.div`
  display: flex;
  margin: 1em 0;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  width: 6em;
  height: 6em;
  margin: 0 0.4em;
`;

const Img = styled.img`
  height: auto;
  width: 100%;
  border-radius: 5px;
`;

const MenuInfo = styled.div`
  width: 60%;
`;

export const MenuName = styled.p`
  font-weight: bold;
  color: ${colors.red};
  margin: 0.2em 0;
`;

export const Price = styled.p`
  font-size: 1.1em;
  color: ${colors.darkCyan};
  font-weight: bold;
`;

const SaleDate = styled.p`
  font-size: 1.1em;
  color: ${colors.grey};
  margin: 0.1em 0;
`;

const SiteName = styled.span`
  color: ${colors.black};
`;

export const TakeAway = styled.span`
  display: inline-block;
  font-size: 0.9em;
  color: ${colors.limerick};
  margin-left: 0.5em;
`;

export const ItemImage = ({ image }) => (
  <ImageContainer>
    <Img src={image} />
  </ImageContainer>
);

const RemoveButton = styled.a`
  color: ${colors.red};
  display: inline-block;
  margin: 0.2em;
`;

export const RemoveFromCart = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItemFromCartAction(item));
  };

  return (
    <RemoveButton onClick={removeItemFromCart}>
      <i className="fas fa-trash-alt fa-lg"></i>
    </RemoveButton>
  );
};

export const ShoppingCartItem = ({ item }) => (
  <Flex>
    <ItemImage image={item.menu.image} />
    <MenuInfo>
      <MenuName>
        {item.menu.name} <SiteName>({item.site.name})</SiteName>
      </MenuName>
      <SaleDate>
        {ISOtoLocalDate(item.sale_date)}
        {item.takeAway && <TakeAway>Vianda</TakeAway>}
      </SaleDate>
      <Price>&#36;{item.price}</Price>
    </MenuInfo>
    <RemoveFromCart item={item} />
  </Flex>
);
