const path = require('path');
const devServer = require('webpack-dev-server');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
module.exports = merge(baseConfig,{
    mode:'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        historyApiFallback: true,
        port: 3000
      }
})