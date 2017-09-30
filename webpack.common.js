const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: [
          /node_modules/,
          path.resolve(__dirname, 'src/styles/'),
        ],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules&localIdentName="[local]__[hash:base64:6]"', 'postcss-loader'],
        }),
      },
      {
        test: /\.css$/,
        include: [
          /node_modules/,
          path.resolve(__dirname, 'src/styles/'),
        ],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'master.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};
