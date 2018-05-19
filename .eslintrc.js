module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    souceType: 'module',
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'prettier/prettier': ['error', {semi: false}],
    'no-console': 'off',
    semi: ['error', 'never'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: true,
        },
      },
    ],
  },
}
