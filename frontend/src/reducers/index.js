import { combineReducers } from 'redux';
import menuComponent from './menuComponent';
import menusOnSale from './menusOnSale';
import auth from './auth';

export default combineReducers({
  menuComponent,
  auth,
  menusOnSale,
});
