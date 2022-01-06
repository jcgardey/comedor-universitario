import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { PrimaryButton } from '../Layout';
import { ShoppingCartItem } from './ShoppingCartItem';

const ShoppingCartContainer = styled.div`
  position: absolute;
  top: 3.5em;
  right: -10em;
  width: 25em;
  padding: 0.5em;
  background-color: ${colors.white};
  box-shadow: 0px 0px 8px ${colors.grey};
  z-index: 1;
`;

const Header = styled.div`
  padding: 0.3em;
  border-bottom: 1px solid ${colors.lightgrey};
  position: relative;
`;

const ShoppinCartItems = styled.div`
  max-height: 20em;
  overflow-y: scroll;
  border-bottom: 1px solid ${colors.lightgrey};
`;

const TotalAmount = styled.p`
  margin: 1em 0;
  text-align: right;
  font-size: 1.3em;
  color: ${colors.grey};
`;

const Price = styled.span`
  font-size: 1.1em;
  color: ${colors.darkCyan};
  font-weight: bold;
  margin-left: 0.3em;
`;

const ShoppingCartSummary = styled.div`
  padding: 0.4em;
`;

const PurchaseButton = styled(PrimaryButton)`
  width: 100%;
  font-weight: bold;
`;

const CloseButton = styled.a`
  position: absolute;
  top: 1.6em;
  right: 1em;
`;

export const ShoppingCartDetails = ({ close }) => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  return (
    <ShoppingCartContainer>
      <Header>
        <h3>Mi Carrito</h3>
        <CloseButton onClick={close}>
          <i className="fas fa-times fa-lg"></i>
        </CloseButton>
      </Header>
      {shoppingCart.length === 0 && <p>El carrito est&aacute; vac&iacute;o</p>}
      {shoppingCart.length > 0 && (
        <>
          <ShoppinCartItems>
            {shoppingCart.map((item, i) => (
              <ShoppingCartItem key={i} item={item} />
            ))}
          </ShoppinCartItems>
          <ShoppingCartSummary>
            <TotalAmount>
              Total:
              <Price>
                &#36;
                {shoppingCart
                  .map((item) => parseFloat(item.price))
                  .reduce(
                    (previousItem, currentItem) => previousItem + currentItem,
                    0
                  )}
              </Price>
            </TotalAmount>
            <PurchaseButton>Comprar</PurchaseButton>
          </ShoppingCartSummary>
        </>
      )}
    </ShoppingCartContainer>
  );
};
