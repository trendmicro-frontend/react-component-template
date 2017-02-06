var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.join(__dirname, '../docs'),
        filename: 'bundle.js?[hash]'
    },
    module: {
        rules: [
            // http://survivejs.com/webpack_react/linting_in_webpack/
            {
                test: /\.jsx?$/,
                use: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                use: 'stylint-loader',
                enforce: 'pre'
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
        new HtmlWebpackPlugin({
            filename: '../docs/index.html',
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    // https://webpack.github.io/docs/webpack-dev-server.html#additional-configuration-options
    devServer: {
        noInfo: false,
        quite: false,
        lazy: false,
        // https://webpack.github.io/docs/node.js-api.html#compiler
        watchOptions: {
            poll: true // use polling instead of native watchers
        }
    }
};
