module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  plugins: [
    'import',
    'react-hooks',
  ],
  rules: {
    'jax-a11y/label-has-associated-control': 'off',
    'jax-a11y/anchor-is-valid': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'linebreak-style': 'off',
    'import/no-cycle': 'off',
  },
};
