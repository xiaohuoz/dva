const path = require('path');
const config = {
  entry: {
    index: './src/index.js'
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