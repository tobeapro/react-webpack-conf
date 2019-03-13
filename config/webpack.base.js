const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/main.[hash:7].js'
	},
	module: {
	    rules: [
	      {
	        test: /\.jsx?$/,
	        use: [
	        	{ loader:'babel-loader' }
	        ]
		  },
		  {
	        test: /\.tsx?$/,
	        use: [
				{ loader:'babel-loader' },
	        	{ loader:'awesome-typescript-loader' }
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
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
            options:{
            	limit: 8192,
            	outputPath:'/',
                name:'img/[name].[hash:7].[ext]'
            }
	      },
          {
            test: /\.(woff2?|eot|ttf|otf)$/,
            loader: 'file-loader',
            options:{
                name:'font/[name].[hash:7].[ext]'
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
			template: './public/index.html'
		}),
		new CopyPlugin([
	      { from: 'public', to: '../dist', ignore: ['*.html'] },
	    ])
	],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'@': path.resolve(__dirname, '../src')
		}
	}
}