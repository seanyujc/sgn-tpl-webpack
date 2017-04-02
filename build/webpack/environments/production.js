'use strict';
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack')
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var path = require('path')
var NODE_ENV = process.env.NODE_ENV || "PRO"
var publicPath = '/app/'

module.exports = function (_path) {
  return {
    context: _path,
    cache: true,
    devtool: 'cheap-module-source-map',
    output: {
      publicPath
    },
    plugins: [
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(NODE_ENV),
        'PUBLIC_PATH': JSON.stringify(publicPath)
      })
    ]
  };
};