// import preStartDevServer from './proxy.config';
const path = require('path');
const apiMocker = require('webpack-api-mocker');
const mocker = path.resolve(__dirname, './mock/index.js');

const config = {
  entry: {
    index: './src/other/index.js'
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
    publicPath:"/",
  },
  devServer: {
    contentBase: path.join(__dirname, "publish"),
    compress: true,
    index: 'index.html',
    before(app){
      apiMocker(app, mocker, {
        proxy: {
            '/repos/*': 'https://www.baidu.com'
        },
        changeHost: true
      });
    }
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              "es2015",
              "react",
              "stage-3",
            ],
          }
        }],
      },{
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [{
          loader: 'style-loader',
        },{
          loader: 'css-loader',
          options:{
            modules: true,
          }
        }],
      }
    ]
  },
};

module.exports = config;