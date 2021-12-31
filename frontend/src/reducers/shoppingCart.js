import {
  ADD_ITEM_TO_CART,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, action.payload];
    case UPDATE_CART_ITEM:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case REMOVE_CART_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
  }
  return state;
};
