const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractTextPluginConfig = new ExtractTextPlugin('style.css?v=[contenthash]');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: {
        js:['./src/index.js'],
        vendor: ['react', 'react-dom', 'react-router', 'react-addons-css-transition-group'],//提取公共的js,打包成单独的js
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'index.js?v=[chunkhash]',
    },
    module: {
        preLoaders: [{
            test: /\.jsx$|\.js$/,
            loader: 'eslint-loader',
            include: `${__dirname}/src`,
            exclude: /bundle\.js$/
        }],
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, 
        /*
        {
            //在style中输出css
            test: /\.(css|scss)$/,
            loader: 'style-loader!css-loader!autoprefixer?browsers=last 8 version!sass-loader'
        },
        */
        {
            //输出独立的css文件
            test: /\.(css|scss)$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 8 version"]}!sass-loader')
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=2500'//url-loader
        }
        ],
    },
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: [
        ExtractTextPluginConfig,//输出独立的css文件
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js?v=[chunkhash]'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),//压缩JS,CSS
        HTMLWebpackPluginConfig,
    ],
};