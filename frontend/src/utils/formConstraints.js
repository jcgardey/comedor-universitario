export const formConstraints = {
  required: {
    validate: (value) => value !== '',
    message: 'The field is mandatory',
  },
  notEmpty: {
    validate: (value) => value.length != 0,
    message: 'The list must not be empty',
  },
};
