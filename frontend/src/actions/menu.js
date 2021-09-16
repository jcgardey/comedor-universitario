import { GET_MENU_COMPONENTS } from './types';
import { getMenuComponentsByName } from '../services/menu';

export const getMenuComponentsByNameAction = (componentName) => (dispatch) => {
  getMenuComponentsByName(componentName)
    .then((res) => {
      dispatch({ type: GET_MENU_COMPONENTS, payload: res.data });
    })
    .catch((err) => console.log(err.response.data));
};
