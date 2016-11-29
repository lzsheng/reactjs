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
            test: /\.(png|jpg)$/,
            loader: 'url?limit=2500'//url-loader
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