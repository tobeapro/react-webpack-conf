var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  // 入口
  entry: {
    app: './src/main.js',
    'babel-polyfill': 'babel-polyfill',
    vendors: ['react','react-dom']
  },
  // 出口
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  // 模块
  module: {
    rules: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react','react-router']
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader','css-loader']
    },
    {
      test: /\.scss$/,
      use: ['style-loader','css-loader','sass-loader']
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }]
  },
  plugins: [
    //打包前清除
    new CleanWebpackPlugin(['dist']),
    //第三方库
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors'], 
    }),
    //模板
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}

