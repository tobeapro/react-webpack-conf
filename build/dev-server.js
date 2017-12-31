var path = require('path')
var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('../webpack.config.js')
var app = express()
// 监听端口
var port = 3030
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
// 监听3030端口，开启服务
app.listen(port, function (err) {
  if (err) {
    console.error(err)
  } else {
    console.info('Listening on port %s', port)
  }
})
