// 使用 NodeJS 自带的文件路径工具
const path = require('path');
// 拼接工作区路径为一个绝对路径
const projectRoot = path.resolve(__dirname, '../');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const ExtractTextPluginConfig = new ExtractTextPlugin('style.css?v=[contenthash]');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body',
});

var config_hot = {
    entry: {
        js:[
            'webpack-dev-server/client?http://127.0.0.1:8008',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ]
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
    output: {
        path: `${__dirname}/dist`,
        filename: 'index.js?v=[hash]',
    },
    module: {
        // preLoaders: [{
        //     test: /\.jsx$|\.js$/,
        //     loader: 'eslint-loader',
        //     include: `${__dirname}/src`,
        //     exclude: /bundle\.js$/
        // }],
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader!babel-loader',
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
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 8 version"]}!sass-loader')
        },
        */
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=8192&name=[name].[ext]'
        }
        ],
    },
    plugins: [
        // ExtractTextPluginConfig,//输出独立的css文件
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin()
    ],
};

//创建server
new WebpackDevServer(webpack(config_hot), {
  publicPath: config_hot.output.publicPath,
  hot: true,
  noInfo: false,
  historyApiFallback: true
}).listen(8008, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8008');
});