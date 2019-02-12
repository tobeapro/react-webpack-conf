const webpackBase = require('./webpack.base.js');
const merge = require('webpack-merge');
module.exports = merge(webpackBase,{
	mode: 'development',
	devServer: {
		contentBase: '../dist',
		port: 3000
	}
})