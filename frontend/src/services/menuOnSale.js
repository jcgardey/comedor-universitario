import axios from '../axios';


export const getMenusOnSaleForDate = (date) => {
  return axios.get(`/api/menu_on_sale?sale_date=${date.toISOString().slice(0, 10)}`);
};

export const createMenuOnSale = (menuOnSale) => {
  const body = {...menuOnSale, sale_date: menuOnSale.date.toISOString().slice(0, 10)};
  return axios.post('/api/menu_on_sale', JSON.stringify(body)); 
}; 
