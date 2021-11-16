import { createMenuOnSale, getAllMenusOnSale } from '../services/menuOnSale';
import { ADD_MENU_ON_SALE, GET_MENUS_ON_SALE } from './types';

export const getAllMenusOnSaleAction = () => (dispatch) => {
  getAllMenusOnSale().then((res) =>
    dispatch({ type: GET_MENUS_ON_SALE, payload: res.data })
  );
};

export const createMenuOnSaleAction = (menusOnSale) => (dispatch) => {
  createMenuOnSale(menusOnSale).then((response) => {
    dispatch({ type: ADD_MENU_ON_SALE, payload: response.data });
  });
};
