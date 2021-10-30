import axios from '../axios';
import { LOGIN_FAIL, LOGIN_REQUEST, USER_LOADED, LOGOUT } from './types';

export const login = (dni, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post('/api/auth/', JSON.stringify({ dni, password }))
    .then((res) => {
      localStorage.setItem('token', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      dispatch(getLoggedUser());
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const getLoggedUser = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .get('/api/user')
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.code });
    });
};
