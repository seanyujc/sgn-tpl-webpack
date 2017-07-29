'use strict';

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HappyPack = require('happypack')

var NODE_ENV = process.env.NODE_ENV || "PRO"

module.exports = function (_path) {
  var webpackConfig = {
    entry: {
      app: _path + '/src/app/index.bootstrap'
    },
    output: {
      filename: 'js/[name]_[hash].js',
      path: path.resolve(_path, 'dist')
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      modules: [path.resolve(_path, 'node_modules')]
    },
    module: {
      rules: [{
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [{
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useCache: true
            }
          }]
        },
        {
          enforce: 'pre',
          test: /\.tsx?$/,
          use: "source-map-loader"
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            'url-loader?name=assets/images/[name]_[hash].[ext]&limit=500'
          ]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              "happypack/loader?id=scss",
              // "css-loader",
              // "postcss-loader",
              // "sass-loader"
            ]
          })
        }
      ]
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: _path,
        manifest: require(_path + "/dll/angular-manifest.json"),
      }),
      new webpack.DllReferencePlugin({
        context: _path,
        manifest: require(_path + "/dll/plugins-manifest.json"),
      }),
      new ExtractTextPlugin('styles.css'),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(_path, 'src', 'index-tpl.html'),
        dlls: ['dll/angular-dll', 'dll/plugins-dll'],
        styles: ['bootstrap']
      }),
      new HappyPack({
        id: 'scss',
        threads: 4,
        loaders: [
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      })
    ]
  }

  return webpackConfig;
}