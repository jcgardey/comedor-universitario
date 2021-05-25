import { ADD_MENU_SUCCESS, UPDATE_FORM_FIELD, FORM_FIELD_ERROR, ADD_VALUE_TO_FIELD, REMOVE_VALUE_FROM_FIELD, CLEAR_FORM} from '../actions/types';

const initialState = {
  menu: {errors:{}, components:[]},
  menuComponent: {errors:{}}
};

export default (state = initialState, action) => {
  switch(action.type) {   
  case UPDATE_FORM_FIELD:
    return createNewState(state,action, action.payload.fieldValue); 
  case ADD_VALUE_TO_FIELD:
    return createNewState(state,action, [...state[action.payload.form][action.payload.fieldName], action.payload.fieldValue]);
  case REMOVE_VALUE_FROM_FIELD:
    return createNewState(state,action, state[action.payload.form][action.payload.fieldName].filter(value => value !== action.payload.fieldValue));
  case FORM_FIELD_ERROR:
    return {
      ...state,
      [action.payload.form]: {
        ...state[action.payload.form],
        errors: {
          ...state[action.payload.form].errors,
          [action.payload.fieldName]: action.payload.errors
        }    
      }
    };
  case CLEAR_FORM:
    return {
      ...state,
      [action.payload.form]: initialState[action.payload.form]
    };
  case ADD_MENU_SUCCESS:
    return {
      initialState
    };
  }
  return state;
};

const createNewState = (state, action, newFieldValue) => (
  {
    ...state,
    [action.payload.form]: {
      ...state[action.payload.form],
      [action.payload.fieldName]: newFieldValue,
      errors: {
        ...(state[action.payload.form] ? state[action.payload.form].errors : {}),
        [action.payload.fieldName]: []
      }  
    }
  }
);