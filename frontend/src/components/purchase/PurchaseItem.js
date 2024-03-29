import React, { useState } from 'react';

import { Menu } from '../menu/Menu';
import styled from 'styled-components';
import colors from '../../styles/colors';
import {
  addItemToCartAction,
  removeItemFromCartAction,
  updateCartItemAction,
} from '../../actions/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleSwitch } from '../common/ToggleSwitch';

const PurchaseInfo = styled.div`
  display: flex;
  margin: 0.3em;
  justify-content: center;
  align-items: center;
`;

const CartButton = styled.button`
  padding: 1em;
  border-radius: 20px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const AddToCart = styled(CartButton)`
  color: ${colors.white};
  background-color: ${colors.black};
`;

const RemoveFromCart = styled(CartButton)`
  color: ${colors.white};
  background-color: ${colors.red};
  margin-left: 0.5em;
`;

const Price = styled.p`
  font-size: 1.5em;
  color: ${colors.darkCyan};
  margin: 0.3em;
  font-weight: bold;
  text-align: center;
`;

export const PurchaseItem = ({ menuOnSale }) => {
  const [takeAway, setTakeAway] = useState(false);

  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const addItemToCart = () => {
    dispatch(addItemToCartAction({ takeAway, ...menuOnSale }));
  };

  const removeItemFromCart = () => {
    dispatch(removeItemFromCartAction({ takeAway, ...menuOnSale }));
  };

  const updateCartItem = (takeAway) => {
    setTakeAway(takeAway);
    dispatch(updateCartItemAction({ takeAway, ...menuOnSale }));
  };

  const itemInCart = shoppingCart.filter(
    (item) => item.id === menuOnSale.id
  )[0];

  return (
    <Menu menu={menuOnSale.menu}>
      <Price>&#36;{menuOnSale.price}</Price>
      <PurchaseInfo>
        {itemInCart && (
          <>
            <label>Vianda</label>
            <ToggleSwitch
              onSwitch={updateCartItem}
              enabled={itemInCart.takeAway}
            />
            <RemoveFromCart onClick={removeItemFromCart}>
              <i className="fas fa-trash-alt fa-lg"></i>
            </RemoveFromCart>
          </>
        )}
        {!itemInCart && (
          <AddToCart onClick={addItemToCart}>
            <i className="fas fa-cart-arrow-down fa-lg"></i>
          </AddToCart>
        )}
      </PurchaseInfo>
    </Menu>
  );
};
