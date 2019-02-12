const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/main.[hash:7].js'
	},
	module: {
	    rules: [
	      {
	        test: /(\.jsx?)$/,
	        use: [
	        	{ loader:'babel-loader' }
	        ]
	      },
	      {
	      	test: /\.(less|css)$/,
	        use: [
	          { 
	          	loader: MiniCssExtractPlugin.loader,
	      		options: {
                	publicPath: '../dist'
                }
              },
	          'css-loader',
	          'less-loader'
	        ]
	      },
	      {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'file-loader',
            options:{
                name:'img/[name]-[hash].[ext]'
            }
	      },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'file-loader',
            options:{
                name:'font/[name]-[hash].[ext]'
            }
          }
	    ]
	},
	plugins: [
	    new MiniCssExtractPlugin({
	    	filename: "css/[name].[hash:7].css",
      		chunkFilename: "[id].css"
	    }),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
	}
}