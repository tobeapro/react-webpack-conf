const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(webpackConfig,{
    mode: 'production',
    plugins:[
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]
})