import axios from '../axios';

export const getMenusByName = (aName) => {
  return axios.get(`/api/menu?name=${aName}`);
};

export const createMenuComponent = (component) => {
  let formData = new FormData();
  formData.append('name', component.name);
  formData.append('component_type', component.component_type);
  if (component.image) {
    formData.append('image', component.image, component.image.name);
  }
  return axios.post('/api/menu_component/', formData);
};

export const createMenu = (menu) => {
  menu.components = menu.components.map((component) => component.id);
  return axios.post('/api/menu', JSON.stringify(menu));
};

export const getMenuComponentsByName = (componentName) => {
  const nameParam = new URLSearchParams({ name: componentName }).toString();
  return axios.get(`/api/menu_component/?${nameParam}`);
};
