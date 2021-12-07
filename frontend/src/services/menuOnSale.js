import axios from '../axios';
import { dateToISOString } from '../utils/common';

export const getMenusOnSaleForDate = (date) => {
  return axios.get(`/api/menus_on_sale?sale_date=${dateToISOString(date)}`);
};

export const getAllMenusOnSale = () => {
  return axios.get('/api/menus_on_sale');
};

export const createMenuOnSale = (menuOnSale) => {
  const body = {
    ...menuOnSale,
    sale_date: dateToISOString(menuOnSale.date),
  };
  return axios.post('/api/menus_on_sale/new', JSON.stringify(body));
};
