import { ADD_MENU_ON_SALE, GET_MENUS_ON_SALE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MENUS_ON_SALE:
      return action.payload;
    case ADD_MENU_ON_SALE:
      return [...state, ...action.payload];
  }
  return state;
};
