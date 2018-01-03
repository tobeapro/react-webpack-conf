var path = require('path')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app:'./src/main.js',
    'babel-polyfill': 'babel-polyfill',
    vendors: ['react','react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './'
  },
  module: {
    rules: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    },
    {
      test: /\.css$/,
      loader: "style!css"
    },
    {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass?outputStyle=expanded'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        fileName:'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
