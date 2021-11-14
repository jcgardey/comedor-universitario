import { GET_MENUS_ON_SALE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MENUS_ON_SALE:
      return action.payload;
  }
  return state;
};
