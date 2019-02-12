const path = require('path');
const webpackBase = require('./webpack.base.js');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = merge(webpackBase,{
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin(['dist'],{
			root: path.resolve(__dirname,'../')
		})
	]
})