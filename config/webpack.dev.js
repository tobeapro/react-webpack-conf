const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
module.exports = merge(webpackConfig,{
    mode: 'development',
    plugins:[],
    devServer:{
        historyApiFallback: true,
        port: 3000
    }
})