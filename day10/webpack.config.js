const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extcss = new ExtractTextPlugin("name.css", {allChunks: true})
const extless = new ExtractTextPlugin("name1.css", {allChunks: true})

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
        extcss,
        extless,
        // new UglifyJsPlugin({     compress: {         warnings: true     } }), new
        // HtmlwebpackPlugin({title: 'Webpack-demos', filename: 'index.html'}),
        new OpenBrowserPlugin({url: 'http://localhost:3000', browser: 'chrome', ignoreErrors: true}),
        //注入jquery,不用require引用
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
        preLoaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'postcss'
            }

        ],

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
                // modules可以设置css模块化（其实就是局部和全局作用域），通过显示设置。：global 和：locale也可以显示实现，
                // 只是设置modules后默认为局部作用域
                loader: extcss.extract('style', "css?camelCase")
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'postcss!less'

            },
            //如果图片的资源大小大于limit在外部引入，不然就声称data urls嵌入
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=1000"
            }

        ],
        postLoaders: [

            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: extless.extract('style', 'css')

            }
        ]

    },

    resolve: {
        root: [path.resolve('./src')], //loader resolve 资源的路径
        fallback: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {
        fallback: path.join(__dirname, "node_modules")
    },
    devtool: "source-map", //生成sourcemap文件
    postcss: function () {

        return [require('autoprefixer')];
    }
}