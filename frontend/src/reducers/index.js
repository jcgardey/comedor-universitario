import { combineReducers } from 'redux';
import menusOnSale from './menusOnSale';
import auth from './auth';
import shoppingCart from './shoppingCart';

export default combineReducers({
  auth,
  menusOnSale,
  shoppingCart,
});
