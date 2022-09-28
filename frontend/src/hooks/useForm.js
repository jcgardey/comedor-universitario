import { useState } from 'react';
import { formConstraints } from '../utils/formConstraints';

export const useForm = () => {
  let values = {};
  let errors = {};
  let validate = {};

  const fieldTypes = {
    text: {
      default: '',
      value: (e) => e.target.value,
    },
    password: {
      default: '',
      value: (e) => e.target.value,
    },
    checkbox: {
      default: false,
      value: (e) => e.target.checked,
    },
    array: {
      default: [],
      value: (array) => array,
    },
    object: {
      default: null,
      value: (value) => value,
    },
  };

  const register = (
    name,
    type,
    fieldConstraints = {},
    defaultValue,
    onChangeCallback
  ) => {
    const [value, setValue] = useState(
      defaultValue ? defaultValue : fieldTypes[type].default
    );
    const [fieldErrors, setFieldErrors] = useState([]);
    values[name] = value;
    errors[name] = fieldErrors;

    const onChange = (e) => {
      setValue(fieldTypes[type].value(e));
      setFieldErrors([]);
      if (onChangeCallback) onChangeCallback();
    };

    validate[name] = () => {
      const fieldErrors = Object.keys(fieldConstraints)
        .filter(
          (constraintName) =>
            !formConstraints[constraintName].validate(
              value,
              fieldConstraints[constraintName]
            )
        )
        .map((constraintName) => {
          return fieldConstraints[constraintName].message
            ? fieldConstraints[constraintName].message
            : formConstraints[constraintName].message;
        });
      setFieldErrors(fieldErrors);
      return fieldErrors.length === 0;
    };
    return { name, type, value, onChange, errors: fieldErrors };
  };

  const isValid = () => {
    return (
      Object.keys(validate)
        .map((fieldName) => validate[fieldName]())
        .filter((isFieldValid) => !isFieldValid).length === 0
    );
  };

  const handleSubmit = (onSubmit) => {
    return (e) => {
      e.preventDefault();
      if (isValid()) onSubmit();
    };
  };

  return { register, handleSubmit, values, errors, isValid };
};
