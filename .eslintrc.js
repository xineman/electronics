module.exports = {
  'extends': 'airbnb-base',
  'parser': 'babel-eslint',
  'plugins': [
    'vue'
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.common.js'
      }
    }
  },
  'rules': {
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "no-param-reassign": [2, { "props": false }]
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'mocha': true
  },
  globals: {
    baseURL: false,
  },
}