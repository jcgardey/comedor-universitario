import axios from '../axios';
import { dateToISOString } from '../utils/common';

export const getMenusOnSaleForDate = (date) => {
  return axios.get(`/api/menus_on_sale?sale_date=${dateToISOString(date)}`);
};

export const getAllMenusOnSale = (site) => {
  const siteQuery = site !== null ? `site=${site}` : '';
  return axios.get(`/api/menus_on_sale?${siteQuery}`);
};

export const createMenuOnSale = (menuOnSale) => {
  const body = {
    ...menuOnSale,
    sale_date: dateToISOString(menuOnSale.date),
  };
  return axios.post('/api/menus_on_sale/new', JSON.stringify(body));
};
