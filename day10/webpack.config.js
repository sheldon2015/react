const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const DefinePlugin = webpack.DefinePlugin;
const ProvidePlugin = webpack.ProvidePlugin;

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
        //配置热加载
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("name.css", {allChunks: true}),
        // new UglifyJsPlugin({     compress: {         warnings: true     } }), new
        // HtmlwebpackPlugin({title: 'Webpack-demos', filename: 'index.html'}),
        new OpenBrowserPlugin({url: 'http://localhost:3000', browser: 'chrome', ignoreErrors: true}),
        //  new ProvidePlugin({$: "jquery", jQuery: "jquery", "window.jQuery":
        // "jquery"})
        new DefinePlugin({
            _DEV: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        })
    ],

    devServer: {
        hot: true,
        inline: true,
        port: 3000
    },

    externals: {
        'jquery1111': '$' //[key(require引用的名字),value(jquery库暴露的的接口名字)]
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
                loader: ExtractTextPlugin.extract('style', "css?modules&camelCase&importLoaders=1", 'postcss?sourceMap=inline')
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loader:'less'
            },
            //如果图片的资源大小大于limit在外部引入，不然就声称data urls嵌入
            {
                test: /\.png$/,
                loader: "url-loader?limit=1000"
            }

        ]

    },
    postcss: function () {
        return [require('precss'), require('autoprefixer')];
    }
}