import axios from '../axios';
import {ADD_MENU_SUCCESS, CLEAR_FORM, GET_MENU_COMPONENTS} from './types';
import {addValueToField} from './form';


export const createMenu = (menu) => (dispatch) => {  
  menu.components = menu.components.map(component => component.id);
  axios.post('/api/menu', JSON.stringify(menu)).then(res => {
    dispatch({type: ADD_MENU_SUCCESS, payload: menu });
  }).catch(err => console.log(err.response.data));
};

export const createMenuComponent = (component) => (dispatch) => {
  let formData = new FormData();
  formData.append('name', component.name);
  formData.append('component_type', component.component_type);
  if (component.image) {
    formData.append('image', component.image, component.image.name);
  }
  axios.post('/api/menu_component/', formData).then(res => {
    dispatch(addValueToField('components', res.data, 'menu'));
    dispatch({type: CLEAR_FORM, payload: {form: 'menuComponent'}});
  }).catch(err => console.log(err));
};

export const getMenuComponentsByName = (componentName) => (dispatch) => {
  const nameParam = new URLSearchParams({name: componentName}).toString();
  axios.get(`/api/menu_component/?${nameParam}`).then(res => {
    dispatch({type: GET_MENU_COMPONENTS, payload: res.data});
  }).catch(err => console.log(err.response.data));
};

