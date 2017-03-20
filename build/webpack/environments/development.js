'use strict';
var path = require('path')
var WebpackBrowserPlugin = require('webpack-browser-plugin');
var webpack = require('webpack')

var port = 8001;
var NODE_ENV = process.env.NODE_ENV || "PRO"
var publicPath = process.env.PUBLIC_PATH || '/app/'

module.exports = function (_path) {
  var webpackConfig = {
    context: _path,
    cache: false,
    output: {
      publicPath
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(_path, "dist"),
      // historyApiFallback: true,
      // noInfo: false,
      // stats: 'minimal',
      headers: { "Access-Control-Allow-Origin": "*" },
      publicPath: '/',
      hot: false,
      host: '0.0.0.0',
      // lazy: true,
      port
      // compress: true
    },
    plugins: [
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(NODE_ENV),
        'PUBLIC_PATH': JSON.stringify(publicPath)
      })
    ]
  };

  if (publicPath === '/') {
    webpackConfig.plugins.push(
      new WebpackBrowserPlugin({
        port,
        url: 'http://localhost'
      }))
  }

  return webpackConfig;
};
