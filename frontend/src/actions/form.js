import {UPDATE_FORM_FIELD, FORM_FIELD_ERROR, ADD_VALUE_TO_FIELD, REMOVE_VALUE_FROM_FIELD} from './types';
import validators from '../forms/validators';

export const updateFormField = (fieldName, fieldValue, form) => (dispatch) => {
  const fieldErrors = validators[form].validateField(fieldName, fieldValue);
  if (fieldErrors.length == 0)
    dispatch({type: UPDATE_FORM_FIELD, payload: {fieldName, fieldValue, form}});
  else
    dispatch({type: FORM_FIELD_ERROR, payload: {fieldName, errors: fieldErrors, form}});
};

export const addValueToField = (fieldName, fieldValue, form) => ({
  type: ADD_VALUE_TO_FIELD,
  payload: {fieldName: fieldName, fieldValue: fieldValue, form}
});

export const removeValueFromField = (fieldName, fieldValue, form) => ({
  type: REMOVE_VALUE_FROM_FIELD,
  payload: {fieldName: fieldName, fieldValue: fieldValue, form}
});