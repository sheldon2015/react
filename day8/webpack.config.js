const webpack = require('webpack');

module.exports = {
    entry: {
        bundle1: ['./src/demo1', './src/demo2']

    },
    output: {
        path: './dist/',
        filename: '[name].js'
    }
}