module.exports = {
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'node': true,
  },
  extends: ['airbnb'],
  plugins: ['react'],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': [
      'error',
      { 'allowAfterThis': true },
    ],
  },
};
