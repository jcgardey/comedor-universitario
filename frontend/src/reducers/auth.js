import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGOUT,
  USER_LOADED,
} from '../actions/types';

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
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
        token: localStorage.getItem('token'),
        refresh: localStorage.getItem('refresh'),
        isAuthenticated: true,
        loading: false,
        ...action.payload,
      };
  }
  return state;
};
