import {combineReducers} from 'redux';
import form from './form';
import menuComponent from './menuComponent';
import auth from './auth';

export default combineReducers({
  form,
  menuComponent,
  auth
});

