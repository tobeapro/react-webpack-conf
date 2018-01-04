var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = merge(baseWebpackConfig, {
  entry: {
    app: './src/main.js',
    'babel-polyfill': 'babel-polyfill',
    vendors: ['react', 'react-dom','react-router-dom']
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
    }),
    //压缩
    new UglifyJsPlugin()
  ]
})
