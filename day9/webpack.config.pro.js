const webpack = require('webpack');

module.exports = {
    entry: {
        day09_1: ['./src/demo1.jsx', './src/demo2.jsx']
    },
    output: {
        path: './dist/',
        filename: '[name].js'
    },
    module: {

        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }

            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style', 'css'] // loader:'style!css'
            }
        ]
    }
}