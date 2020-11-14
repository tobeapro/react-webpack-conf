const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = merge(webpackConfig, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
})
