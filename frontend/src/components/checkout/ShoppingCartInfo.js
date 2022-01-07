import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { ISOStringToDate, ISOtoLocalDate } from '../../utils/common';
import { ShoppingCartTotal } from '../cart/ShoppingCartDetails';
import { ShoppingCartItem } from './ShoppingCartItem';

const Container = styled.div`
  width: 40%;
`;

const CartTitle = styled.h2`
  font-weight: 300;
  color: ${colors.black};
  text-align: center;
`;

const Location = styled.p`
  font-size: 1.2em;
  margin: 1em 0;
  margin-top: 1.5em;
`;

const SaleDate = styled.span`
  color: ${colors.grey};
`;

const Site = styled.span`
  color: ${colors.black};
  margin-left: 0.5em;
  font-weight: 400;
`;

const CartItems = styled.div`
  padding: 1em;
  border-bottom: 1px solid ${colors.grey};
`;

const Total = styled(ShoppingCartTotal)`
  font-size: 1.5em;
`;

export const ShoppingCartInfo = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const cartItemsBySaleDate = shoppingCart.reduce((items, currentItem) => {
    items[currentItem.sale_date]
      ? items[currentItem.sale_date].push(currentItem)
      : (items[currentItem.sale_date] = [currentItem]);
    return items;
  }, {});

  return (
    <Container>
      <CartTitle>Men&uacute;s</CartTitle>
      <CartItems>
        {Object.keys(cartItemsBySaleDate)
          .sort(
            (aDate, anotherDate) =>
              ISOStringToDate(aDate).getTime() >
              ISOStringToDate(anotherDate).getTime()
          )
          .map((saleDate, i) => (
            <div key={i}>
              <Location>
                <SaleDate>{ISOtoLocalDate(saleDate)}</SaleDate>
                <Site>{cartItemsBySaleDate[saleDate][0].site.name}</Site>
              </Location>
              {cartItemsBySaleDate[saleDate].map((item, j) => (
                <ShoppingCartItem key={j} item={item} />
              ))}
            </div>
          ))}
      </CartItems>
      <Total shoppingCart={shoppingCart} />
    </Container>
  );
};
