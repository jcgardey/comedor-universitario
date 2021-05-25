import {GET_MENU_COMPONENTS} from '../actions/types';

const initialState = {
  menuComponents: []
};

export default (state = initialState, action) => {
  switch(action.type) {
  case GET_MENU_COMPONENTS:
    return {
      ...state,
      menuComponents: action.payload
    };

  }
  return state;
};