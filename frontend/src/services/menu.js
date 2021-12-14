import axios from '../axios';

export const getAllMenus = () => {
  return axios.get('/api/menus');
};

export const getMenusByName = (aName) => {
  return axios.get(`/api/menus?name=${aName}`);
};

export const createMenu = (menu) => {
  let formData = new FormData();
  formData.append('name', menu.name);
  formData.append('menu_type', menu.menu_type);
  formData.append('suitable_celiac', menu.suitable_celiac);
  formData.append('suitable_vegetarian', menu.suitable_vegetarian);
  if (menu.image) {
    formData.append('image', menu.image, menu.image.name);
  }
  return axios.post('/api/menus/new', formData);
};
