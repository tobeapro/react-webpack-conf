var webpack =require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseWebpackConfig = require('./webpack.base.conf')
module.exports = merge(baseWebpackConfig, {
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/dev-server',
      './src/main.js'
    ],
    'babel-polyfill': 'babel-polyfill',
    vendors: ['react', 'react-dom', 'react-router']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
