// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'never'],
    curly: ['error', 'multi-line'],
    'no-async-promise-executor': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': ['error', { arrowParens: 'avoid', printWidth: 120, singleQuote: true, trailingComma: 'none' }],
    'react/prop-types': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
