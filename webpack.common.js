const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          cssSourceMap: true,
          loaders: {
            postcss: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: { minimize: false, sourceMap: true },
              },
            ],
          },
        },
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/,
      //   exclude: [
      //     /node_modules/,
      //     path.resolve(__dirname, 'src/styles/'),
      //   ],
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [{
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: true,
      //         localIdentName: '[local]__[hash:base64:6]',
      //       },
      //     },
      //     { loader: 'postcss-loader', options: { sourceMap: true } },
      //     ],
      //   }),
      // },
      // {
      //   test: /\.css$/,
      //   include: [
      //     /node_modules/,
      //     path.resolve(__dirname, 'src/styles/'),
      //   ],
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [{
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //     { loader: 'postcss-loader', options: { sourceMap: true } },
      //     ],
      //   }),
      // },
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
