var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry: {
        angular: ['angular', 'angular-ui-router', 'angular-ui-bootstrap', 'oclazyload']
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