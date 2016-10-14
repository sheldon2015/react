const webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        day09_1: ['./src/demo1.jsx'],
        day09_2: ['./src/demo2.jsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: './dist/',
        filename: '[name].js',
        //配置webserver服务器
        publicPath: '/dist', //不配置不能刷新，热加载
        chunkFilename: '[name].js'
    },
    plugins: [

        //提取公共部分
        new webpack
            .optimize
            .CommonsChunkPlugin(
            /* chunkName= */
            "vendor",
            /* filename= */
            "vendor.bundle.js"),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name][id].css")
    ],

    devServer: {
        hot: true,
        inline: true
        // , port:3000//可以设置调试端口

    },
    module: {

        loaders: [
            {
                test: /\.jsx?$/, //指定js、jsx
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }

            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                //loaders: [     'style', 'css' ], // loader:'style!css'
                loader: ExtractTextPlugin.extract('style-loader', "css-loader")
            }

        ]

    }
}