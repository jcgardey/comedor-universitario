import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.access);
      localStorage.setItem('refresh', action.payload.refresh);
      return {
        token: action.payload.access,
        refresh: action.payload.refresh,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case USER_LOADED:
      return {
        ...state,
        ...action.payload,
      };
  }
  return state;
};
