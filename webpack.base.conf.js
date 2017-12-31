import path from 'path'
export default {
  // 入口
  entry: {
    app: './src/main.js'
  },
  // 出口
  output: {
    // 服务器静态资源目录
    publicPath: 'http://loaclhost:3030/dist',
    // 出口文件目录
    path: path.resolve(__dirname, 'dist'),
    // 出口文件名
    filename: 'bundle.js'
  },
  // 模块
  module: {
    rules: [
      {
        // 匹配所有的 .js .jsx 文件
        test: /(\.js|\.jsx)$/,
        // 忽略 node_modules 目录
        exclude: /node_modules/,
        use: {
          // 使用的loader
          loader: 'babel-loader',
          // babel-loader 的选项
          options: {
            // 预设规则
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
}
