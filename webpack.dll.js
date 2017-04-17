var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    angular: ['angular', 'angular-i18n/angular-locale_zh-cn', 'angular-sanitize'],
    plugins: ['angular-animate', 'angular-ui-router', 'angular-ui-bootstrap', 'angular-touch', 'angular-iscroll', 'oclazyload', 'ng-bases'],
    assets: [path.resolve(__dirname, 'src/assets/fonts/iconfont')],
    styles: [path.resolve(__dirname, 'src/assets/styles/bootstrap')],
    dev: ['angular-mocks']
  },
  output: {
    path: path.resolve(__dirname, 'dll/'),
    filename: '[name]-dll.js',
    library: '[name]_lib'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.scss'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll/[name]-manifest.json'),
      name: '[name]_lib'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'angular',
      minChunks: 2,
    }),
    new ExtractTextPlugin('bootstrap.css')
  ],
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  }
}