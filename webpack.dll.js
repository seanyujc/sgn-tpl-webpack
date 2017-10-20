var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    angular: ['angular', 'angular-i18n/angular-locale_zh-cn', 'angular-sanitize'],
    plugins: ['angular-animate', 'angular-ui-router', path.resolve(__dirname, 'src/lib/angular-ui-bootstrap'),
      'angular-touch', 'angular-iscroll', 'oclazyload', path.resolve(__dirname, 'src/assets/fonts/iconfont')
    ],
    styles: ['bootstrap-loader'],
  },
  output: {
    path: path.resolve(__dirname, 'dll/dll/'),
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
    new ExtractTextPlugin('../styles/bootstrap.css')
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
          loader: "style!css!sass?outputStyle=expanded&includePaths[]=" +
            (path.resolve(__dirname, "./node_modules"))
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=../assets/fonts/[name].[ext]'
          }
        ]
      }
    ]
  }
}