const webpack = require('webpack');

/*
day01---------------------------

*/

/*module.exports = {
    entry: './src/demo1.js',
    output: {
        path: './dist/',
        filename: 'day01.js'
    }
}
*/

/*
 day02---------------------------

*/

module.exports = {
    entry: {
        day02_1: ['./src/demo1.js', './src/demo2.js', './src/demo3.js']

    },
    output: {
        path: './dist/',
        filename: '[name].js'
    }
}