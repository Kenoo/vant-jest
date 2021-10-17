module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    'plugin:vue/essential',
    'airbnb-base',
  ],
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 13,
    "sourceType": 'module',
  },
  "rules": {
  },
  "plugins": [
    'vue',
    '@typescript-eslint',
  ]
};
