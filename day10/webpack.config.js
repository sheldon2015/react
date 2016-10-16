const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        day09_1: ['./src/demo1.jsx','./src/demo2.jsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: './dist/',
        filename: '[name].js',
        publicPath: '/dist',
        chunkFilename: '[name].js'
    },
    plugins: [

        new webpack
            .optimize
            .CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css"/*, {allChunks: true}*/)
    ],

    devServer: {
        hot: true,
        inline: true,
        port: 3000

    },
    module: {

        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }

            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', "css-loader")
            }

        ]

    }
}