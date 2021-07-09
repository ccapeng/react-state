//import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    main: './src/indexRedux.js',
    jotai: './src/indexJotai.js'
  },
  mode: "development",

  output: {
    path: __dirname,
    pathinfo: true,
  },

  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          // options: {
          //   presets: ['@babel/preset-env']
          // }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: "jotai.html",
      template: "src/jotai.html",
      chunks: ['jotai']
    })
  ]
  
};