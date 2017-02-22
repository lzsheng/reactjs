// 使用 NodeJS 自带的文件路径工具
const path = require('path');
// 拼接工作区路径为一个绝对路径
const projectRoot = path.resolve(__dirname, '../');

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
        js:[
            './src/index.js'
        ]
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'index.js?v=[hash]',
    },
    resolve: {

        // 不进行自动补全或处理的文件或者文件夹
        fallback: [path.join(__dirname, './node_modules')],

        // 默认路径代理
        //2017-01-16 lzsheng
        // js中可以使用es6模块引入的方式引入图片资源，但是如果在jsx中引用，会直接解析为~srcPath(bug～！)
        // 在css中可以直接使用 background: url(~srcPath/img/yys_bg.jpg) 引入图片
        alias: {
            'srcPath' : path.resolve(__dirname, 'src/')
        }
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
        // {
        //     //输出独立的css文件
        //     test: /\.(css|scss)$/,
        //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!autoprefixer-loader?{browsers:["last 8 version"]}!sass-loader?sourceMap')
        // },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=8192&name=[name].[ext]'
        }
        ],
    },
    devtool: "source-map",
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: [
        ExtractTextPluginConfig,//输出独立的css文件
        HTMLWebpackPluginConfig,
    ],
};