var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3030/dist/'
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
    }]
  },
  // 插件
  plugins: [
    // 启用热更新
    new webpack.HotModuleReplacementPlugin(),
    // 允许错误不打断程序
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
