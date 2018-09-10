// import preStartDevServer from './proxy.config';
// const apiMocker = require('webpack-api-mocker');

const path = require('path');
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
      // apiMocker(app, path.resolve('./proxy.config.js'), {
      //   // proxy: {
      //   //   '/repos/*': 'https://api.github.com/',
      //   // },
      //   // changeHost: true,
      // })
        app.get('/some/path', function(req, res) {
        
        res.json({ custom: 'response' });
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