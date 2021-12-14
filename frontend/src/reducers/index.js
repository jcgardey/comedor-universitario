import { combineReducers } from 'redux';
import menusOnSale from './menusOnSale';
import auth from './auth';

export default combineReducers({
  auth,
  menusOnSale,
});
