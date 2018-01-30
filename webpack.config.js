const path = require('path');
const config = {
  entry: './src/other/index.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/',
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
              plugins: [
                "transform-runtime"
              ]
            }
          }],
    }]
  },
};

module.exports = config;