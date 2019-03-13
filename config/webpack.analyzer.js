const path = require('path');
const webpackBase = require('./webpack.base.js');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = merge(webpackBase,{
	mode: 'production',
	plugins: [
		new BundleAnalyzerPlugin()
	]
})