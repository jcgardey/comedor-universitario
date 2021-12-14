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
  number: {
    validate: (value) => Number(value) >= 0,
    message: 'The value must be a number',
  },
  integer: {
    validate: (value, options) => {
      if (!/^-?\d+$/.test(value)) return false;
      return options.min ? parseInt(value) >= options.min : true;
    },
    message: 'The value must be integer',
  },
  regex: {
    validate: (value, options) => value === '' || options.pattern.test(value),
  },
  date: {
    validate: (value) => {
      const ddmmyyyyPattern =
        /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
      return value === '' || ddmmyyyyPattern.test(value);
    },
    message: 'Invalid date',
  },
};
