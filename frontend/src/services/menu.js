
import axios from '../axios';


export const getMenusByName = (aName) => {
  return axios.get(`/api/menu?name=${aName}`);
};