export const formConstraints = {
  required: {
    validate: (value) => value !== '',
    message: 'The field is mandatory',
  },
  notEmpty: {
    validate: (value) => value.length != 0,
    message: 'The list must not be empty',
  },
  notNull: {
    validate: (value) => value !== null,
    message: 'A value must be selected',
  },
  integer: {
    validate: (value, options) => {
      if (!/^-?\d+$/.test(value)) return false;
      return options.min ? parseInt(value) >= options.min : true;
    },
    message: 'The value must be integer',
  },
};
