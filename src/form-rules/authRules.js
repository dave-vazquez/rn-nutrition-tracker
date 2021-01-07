/* eslint-disable prettier/prettier */
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/;

const authRules = {
  email: {
    required: {
      value: true,
      message: "Required field",
    },
    pattern: {
      value: EMAIL_REGEX,
      message: "Invalid email address",
    },
  },
  password: {
    required: {
      value: true,
      message: "Required field",
    },
    min: {
      value: 8,
      message: "Password must be between 8 and 16 characters",
    },
    max: {
      value: 16,
      message: "Password must be between 8 and 16 characters",
    },
    pattern: {
      value: PASSWORD_REGEX,
      message:
        'Must be between 8 & 16 characters\n' +
        'Must contain at least 1 numeric character\n' +
        'Must contain at least one special character\n' +
        'Must must contain at least 1 lowercase character\n' +
        'Must must contain at least 1 uppercase character\n',
    },
  },
};

export default authRules;