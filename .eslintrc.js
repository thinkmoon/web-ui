module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { 'code': 120 }],
  },
};
