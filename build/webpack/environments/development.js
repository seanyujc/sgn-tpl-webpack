'use strict';
var path = require('path')
var WebpackBrowserPlugin = require('webpack-browser-plugin');
var webpack = require('webpack')

var port = 8001;

module.exports = function (_path) {
  return {
    context: _path,
    cache: false,
    output: {
      publicPath: "/"
    },
    externals: {
      // angular: 'angular',
      // "angular-ui-router":"angular-ui-router",
      // "angular-ui-bootstrap":"angular-ui-bootstrap",
      // "oclazyload":"oclazyload"
    },
    performance: {
      // hints: "error"
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(_path, "dist"),
      // historyApiFallback: true,
      // noInfo: false,
      // stats: 'minimal',
      publicPath: '/',
      // hot: true,
      // host: '0.0.0.0',
      // lazy: true,
      port
      // compress: true
    },
    plugins: [
      new WebpackBrowserPlugin({
        port,
        url: 'http://localhost'
      })
    ]
  };
};
