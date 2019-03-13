## wepack-for-react-spa
>  基于webpack4的react单页面配置

之前写的旧版本，请查看分支[webpack@3.x](https://github.com/tobeapro/react-cli/tree/3.x)

#### 相关依赖说明

```json
"devDependencies": {
    "@babel/core": "^7.2.2", //babel核心库
    "@babel/plugin-proposal-class-properties": "^7.3.4", //兼容class property
    "@babel/plugin-transform-runtime": "^7.3.4", //babel转码运行时动态转码的插件
    "@babel/preset-env": "^7.3.4", //babel转码js的预设
    "@babel/preset-react": "^7.0.0",//babel转码react的预设
    "awesome-typescript-loader": "^5.2.1",
    "babel-loader": "^8.0.5", 
    "clean-webpack-plugin": "^1.0.1", //打包时删除上一次的文件
    "copy-webpack-plugin": "^5.0.1", //相关静态资源需要直接复制的插件
    "css-loader": "^2.1.0",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0", //打包用的html模板插件
    "less": "^3.9.0",
    "less-loader": "^4.1.0",
    "mini-css-extract-plugin": "^0.5.0", //分割、独立打包css的插件
    "source-map-loader": "^0.2.4",
    "ts-loader": "^5.3.3",
    "typescript": "^3.3.3333",
    "url-loader": "^1.1.2",
    "webpack": "^4.29.3", 
    "webpack-bundle-analyzer": "^3.0.4", //可视化预览打包后的文件
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.1.14",
    "webpack-merge": "^4.2.1"
  },
  "dependencies": {
    "@babel/runtime": "^7.3.4", //babel转码运行时需要动态引用的资源合集
    "@types/react": "^16.8.8",
    "@types/react-dom": "^16.8.2",
    "antd": "^3.15.0",
    "react": "^16.8.4",
    "react-dom": "^16.8.4",
    "react-router-dom": "^4.3.1"
  }
```

> 相关ts的配置还需要调适
