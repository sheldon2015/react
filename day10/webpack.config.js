const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
        day09_1: [
            './src/demo1.jsx', './src/demo2.jsx'
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: './dist/',
        filename: '[name].js',
        publicPath: '/dist/',
        chunkFilename: '[name].js'
    },
    plugins: [

        new CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("name.css"/*, {allChunks: true}*/),
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlwebpackPlugin({title: 'Webpack-demos', filename: 'index.html'}),
        new OpenBrowserPlugin({url: 'http://localhost:3000',browser:'chrome', ignoreErrors: true})
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
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }

            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', "css?modules&sourceMap&camelCase")
            }

        ]

    }
}