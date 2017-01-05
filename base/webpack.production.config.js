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
        js:['./src/index.js']
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'index.js?v=[hash]',
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
        
        {
            //在style中输出css
            test: /\.(css|scss)$/,
            loader: 'style-loader!css-loader!autoprefixer?browsers=last 8 version!sass-loader'
        },
        /*
        {
            //输出独立的css文件
            test: /\.(css|scss)$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!autoprefixer-loader?{browsers:["last 8 version"]}!sass-loader?sourceMap')
        },
        */
        {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=2500'//url-loader
        }
        ],
    },
    // devtool: "source-map",//是否打包出.map文件
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: [
        // ExtractTextPluginConfig,//输出独立的css文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            // sourceMap: true,
            mangle: true
        }),//压缩JS,CSS
        HTMLWebpackPluginConfig,
    ],
};