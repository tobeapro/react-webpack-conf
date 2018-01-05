## react-cli
> 学习webpack,搭建一个自己的react脚手架工具
### 项目依赖
```
"dependencies": {
    "babel-polyfill": "^6.26.0",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-router-dom": "^4.2.2"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.17",
    "css-loader": "^0.28.7",
    "express": "^4.16.2",
    "file-loader": "^1.1.6",
    "html-webpack-plugin": "^2.30.1",
    "node-sass": "^4.7.2",
    "react-hot-loader": "^3.1.3",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.19.1",
    "uglifyjs-webpack-plugin": "^1.1.5",
    "webpack": "^3.10.0",
    "webpack-dev-middleware": "^2.0.3",
    "webpack-hot-middleware": "^2.21.0",
    "webpack-merge": "^4.1.1"
  }
```
### 初始化项目
```
npm init //会生成一个package.json
```
### 安装依赖
`react: ^16.2.0` `react-dom: ^16.2.0`  `react-router-dom:^4.2.2`
```
npm install react react-dom react-router-dom babel-polyfill --save  // babel-polyfill用来支持es6语法
```
#### 开发过程中的依赖
`webpack: ^3.10.0`
首先是webpack，其实主要就是webpack配置
```
npm install webpack --save-dev
```
##### 先看例子吧
##### 在根目录下新建一个`webpack.config.js`,如果在命令行直接使用`webpack`(不指定参数)，默认就是打包这个文件,大致结构如下：
```
var path = require('path')
module.exports = {
  //入口
  entry:'./src/main.js'
  // 出口
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 模块解析
  module: {},
  // 插件
  plugins:[]
}

```
##### 大致就是这样，这是一个简单的实例将`src目录下的main.js`作为入口打包成进`dist目录下的bundle.js`,然后在页面引用这个js就可以了
##### 这是个简单的例子，开发过程中我们还需要`babel转码`,`热更新`，`调试`等,打包时成生产环境代码还需要`压缩`，`分离第三方库`等功能。
##### 接下来进行项目完善
```
npm install babel-cli babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev  //安装react，es6转码过程中需要的依赖
```
##### 新建一个`.babelrc`文件
```
//babel的配置文件
{
    "presets": [
        [
            "es2015", 
            { "modules": false }
        ],
        "react"
    ],
    "plugins": ["react-hot-loader/babel"]
}
```
##### 新建一个`.gitignore`文件
```
// 项目提交仓库是忽略的一些代码
.DS_Store
node_modules/
dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
# Editor directories and files
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
```
##### 新建一个`.editorconfig`
```
//规范编码风格
root = true
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```
##### 然后配置`webpack`，将开发环境和生产环境分开
##### 先新建一个`webpack.base.conf.js`基础文件
```
var path = require('path')
module.exports = {
  // 出口
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  // 模块
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
      use: ['style-loader','css-loader']
    },
    {
      test: /\.scss$/,
      use: ['style-loader','css-loader','sass-loader']
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }]
  }
}
```
##### 出口文件使用`name`+`hash`命名这样每次修改代码打包以后名字都会不一样，然后引用需要的`loader`
```
npm install css-loader style-loader sass-loader node-loader file-loader react-hot-loader --save-dev
```
##### 使用`test`匹配正则加载需要的`loader`，css预处理器使用的`scss`(scss可以看做sass的升级),`react-hot-loader`是热跟心中需要用到的
##### 然后新建`webpack.dev.conf.js`和`webpack.prod.conf.js`为开发环境打包和生产环境打包，添加使用过程中的依赖
```
npm install webpack-dev-middleware webpack-hot-middleware webpack-merge clean-webpack-plugin html-webpack-plugin uglifyjs-webpack-plugin express --save-dev
```
使用`webpack-merge`继承`webpack.base.conf.js`中的配置，再单独配置（详细直接看代码）
我们将自己的代码、第三方库、转码用到的babel-polyfill分开打包，这样再根据`[name]-[hash].js`打包出三个文件
#### 在`plugins`中加入`webpack.optimize.CommonsChunkPlugin()`将第三方库配置为公共代码（公共代码加载页面时会先引用）
#### 加入`HtmlWebpackPlugin`配置，配置项目打包时引用的模板，我们一般在根目录下建议一个`index.html`的页面
#### 加入`UglifyJsPlugin`用来压缩代码
#### 加入`CleanWebpackPlugin`配置，每次打包时先清空
#### 配置`HotModuleReplacementPlugin`和`NoEmitOnErrorsPlugin`分别为热更新使用和打包出现错误不会退出
#### 然后`dev开发环境`比`prod生产环境`配置的入口文件中多了两行,是为了开发环境中`热更新`配置的
```
entry: {
    app: [
 +     'webpack-hot-middleware/client?reload=true', 
 +     'webpack/hot/only-dev-server', 
       './src/main.js'
    ],
    'babel-polyfill': 'babel-polyfill',
    vendors: ['react', 'react-dom', 'react-router-dom']
  }
```

#### 接下来为开发环境配置本地服务器，`webpack`有个`webpack-dev-server`，相当于webpack自己加的服务器,可以自己去研究下，我开始没用起来，还是选择了express
#### 在`build`文件夹下新建一个`dev.server.js`文件，然后给开发环境配置服务器,引用`webpack-dev-middleware`和`webpack-hot-middleware`配置自动打包和自动刷新页面,具体的在代码中也有相应注释，更多参数配置可以看官方文档
#### [webpack中文文档](https://doc.webpack-china.org/concepts/)
#### 然后直接说的在命令行中直接使用`webpack`打包的是`webpack.config.js`文件，现在我们改写了，就在`package.json`中配置一个
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", 
+    "build": "webpack --config webpack.prod.conf.js",
+    "dev": "node build/dev-server.js"
  }
```
#### 这样在命令行中使用
```
npm run build //使用生产环境打包
npm run dev   //启动开发环境调试,当代码发生更改会自动刷新页面
```
