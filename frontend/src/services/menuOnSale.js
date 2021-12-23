import axios from '../axios';
import { dateToISOString } from '../utils/common';

export const getMenusOnSaleForSiteAndDate = (site, date) => {
  return axios.get(
    `/api/menus_on_sale?site=${site}&sale_date=${dateToISOString(date)}`
  );
};

export const getAllMenusOnSale = (site) => {
  return axios.get(`/api/menus_on_sale?site=${site}`);
};

export const createMenuOnSale = (menuOnSale) => {
  const body = {
    ...menuOnSale,
    sale_date: dateToISOString(menuOnSale.date),
  };
  return axios.post('/api/menus_on_sale/new', JSON.stringify(body));
};
