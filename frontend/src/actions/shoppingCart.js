import { ADD_ITEM_TO_CART, REMOVE_CART_ITEM, UPDATE_CART_ITEM } from './types';

export const addItemToCartAction = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCartAction = (item) => ({
  type: REMOVE_CART_ITEM,
  payload: item,
});

export const updateCartItemAction = (item) => ({
  type: UPDATE_CART_ITEM,
  payload: item,
});
