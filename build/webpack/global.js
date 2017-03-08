'use strict';

var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var NODE_ENV = process.env.NODE_ENV || "PRO"

module.exports = function (_path) {
    var webpackConfig = {
        entry: {
            app: _path + '/src/app/index.bootstrap'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(_path, 'dist')
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            modules: [path.resolve(_path, 'node_modules')],

        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {}
                        }]
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                            loader: "css-loader" // translates CSS into CommonJS 
                        }, {
                            loader: "sass-loader" // compiles Sass to CSS 
                        }]
                    })
                },
                {
                    test: /\.js$/,
                    use: [
                        'babel-loader'
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DllReferencePlugin({
                context: _path,
                manifest: require(_path + "/dll/angular-manifest.json"),
            }),
            new ExtractTextPlugin('styles.css'),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commons',
                filename: 'commons.js',
                minChunks: 2,
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(_path, 'src', 'index-tpl.html')
            })
        ]
    }

    return webpackConfig;
}