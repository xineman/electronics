const path = require('path');
const {
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
} = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.strategy(
  {
    entry: 'prepend',
  },
)(common, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  ],
  devtool: 'inline-source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // pathRewrite: { '^/api': '' },
      },
      '/token': 'http://localhost:3000',
    },
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
  ],
});
