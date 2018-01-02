var webpack =require('webpack')
var merge = require('webpack-merge')
var WebpackDevServer = require('webpack-dev-server')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseWebpackConfig = require('./webpack.base.conf')
module.exports = merge(baseWebpackConfig, {
  devServer: {
    contentBase: "./",
    historyApiFallback: true, 
    inline: true,
    hot: true
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     template: './index.html',
    //     fileName:'index.html'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
