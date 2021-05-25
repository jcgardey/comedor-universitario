import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, USER_LOADED } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'), 
  isAuthenticated: localStorage.getItem('token') !== null,
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {  
  case LOGIN_REQUEST:
    return {
      ...state,
      loading: true
    };
  case LOGIN_SUCCESS:
    localStorage.setItem('token', action.payload.access);
    //localStorage.setItem('refresh', action.payload.refresh);
    return {
      token: action.payload.access,
      refresh: action.payload.refresh, 
      isAuthenticated: true,
      loading: false,
                
    };
  case LOGIN_FAIL:
    return {
      ...state,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: action.payload
    };
  case LOGOUT:
    localStorage.removeItem('token');
    return {
      ...state,
      isAuthenticated: false
    };
  case USER_LOADED:
    return {
      ...state,
      ...action.payload
    };
  }
  return state;
};