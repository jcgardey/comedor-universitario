import { getAllMenusOnSale } from '../services/menuOnSale';
import { GET_MENUS_ON_SALE } from './types';

export const getAllMenusOnSaleAction = () => (dispatch) => {
  getAllMenusOnSale().then((res) =>
    dispatch({ type: GET_MENUS_ON_SALE, payload: res.data })
  );
};
