import {
  ADD_ITEM_TO_CART,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM,
} from '../actions/types';

export default (
  state = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  action
) => {
  let newState = state;
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      newState = [...state, action.payload];
      break;
    case UPDATE_CART_ITEM:
      newState = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      break;
    case REMOVE_CART_ITEM:
      newState = state.filter((item) => item.id !== action.payload.id);
  }
  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
};
