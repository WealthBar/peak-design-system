
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config');


function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
    }),
    new FriendlyErrorsPlugin(),
    new StylelintPlugin({
      files: ['src/**/*.vue', 'src/**/*.scss'],
    }),
  ],
});
