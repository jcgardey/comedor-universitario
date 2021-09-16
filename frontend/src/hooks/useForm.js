import { useState } from 'react';
import { formConstraints } from '../utils/formConstraints';

export const useForm = () => {
  let values = {};
  let errors = {};
  let constraints = {};
  let setErrors = {};

  const fieldTypes = {
    text: {
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
  };

  const register = (name, type, fieldConstraints = {}) => {
    const [value, setValue] = useState(fieldTypes[type].default);
    const [fieldErrors, setFieldErrors] = useState([]);
    values[name] = value;
    errors[name] = fieldErrors;

    const onChange = (e) => {
      setValue(fieldTypes[type].value(e));
      setFieldErrors([]);
    };

    constraints[name] = () => {
      const fieldErrors = Object.keys(fieldConstraints)
        .filter(
          (constraintName) => !formConstraints[constraintName].validate(value)
        )
        .map((constraintName) => {
          return fieldConstraints[constraintName].message
            ? fieldConstraints[constraintName].message
            : formConstraints[constraintName].message;
        });
      setFieldErrors(fieldErrors);
    };
    return { name, type, value, onChange, errors: fieldErrors };
  };

  const validationErrors = () => {
    return Object.keys(errors).reduce(
      (acc, fieldName) => [...acc, ...errors[fieldName]],
      []
    );
  };

  const handleSubmit = (onSubmit) => {
    return (e) => {
      e.preventDefault();
      Object.keys(constraints).forEach((fieldName) => {
        constraints[fieldName]();
      });
      if (validationErrors().length == 0) onSubmit();
    };
  };

  return { register, handleSubmit, values, errors };
};
