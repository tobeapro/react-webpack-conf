var path = require('path')
var express = require('express')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.js')
var app = express()
// 监听端口
var port = 8080
// 加载webpack配置
var compiler = webpack(webpackConfig)
// 加载中间件webpack-dev-middleware
// 1. 监听资源变更，自动打包 2. 快速编译，资源走内存，不读硬盘 3.返回中间件
app.use(require('webpack-dev-middleware')(compiler, {
  // 不打印多余信息
  noInfo: true,
  // 监听目录
  publicPath: webpackConfig.output.publicPath,
  // 控制台打包彩色
  stats: {
    colors: true
  }
}))
// 加载中间件webpack-hot-middleware
// 热加载，实时更新改变
app.use(require('webpack-hot-middleware')(compiler))
// 所有请求
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})
// 监听8080端口，开启服务
new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8080/')
});
