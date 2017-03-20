var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry: {
        angular: ['angular', 'angular-i18n/angular-locale_zh-cn', 'angular-sanitize'],
        plugins: ['angular-animate', 'angular-ui-router', 'angular-ui-bootstrap', 'angular-iscroll', 'oclazyload', 'ng-bases']
    },
    output: {
        path: 'dll/',
        filename: 'dll.[name].js',
        library: "[name]_lib"
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    plugins: [
        new webpack.DllPlugin({
            path: __dirname + '/dll/[name]-manifest.json',
            name: '[name]_lib'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'angular',
            minChunks: 2,
        })
    ],
    module: {
        loaders: [
            // {
            //     test: /\.ts(x?)$/,
            //     loader: 'ts-loader'
            // }
            // {
            //     test: /\.js$/,
            //     loaders: [
            //         'babel-loader'
            //     ]
            // }
        ]
    }
}