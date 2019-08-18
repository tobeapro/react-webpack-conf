## wepack-for-react-spa
>  基于webpack4的react+typescript单页面配置

请查看分支,无typescript版[webpack@4.x](https://github.com/tobeapro/react-cli/tree/4.x)


#### 相关依赖说明

```javascript
"devDependencies": {
    "@babel/core": "^7.5.5", // babel核心库，babel编译的js，注意是js
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-react": "^7.0.0",
    "@types/react": "^16.9.2",// @types文件夹下为依赖的ts声明文件
    "@types/react-dom": "^16.8.5",
    "@types/react-router-dom": "^4.3.4",
    "awesome-typescript-loader": "^5.2.1", // 编译ts的loader
    "babel-loader": "^8.0.6",
    "clean-webpack-plugin": "^3.0.0",
    "copy-webpack-plugin": "^5.0.4",
    "css-loader": "^3.2.0",
    "file-loader": "^4.2.0",
    "html-webpack-plugin": "^3.2.0",
    "less": "^3.10.1",
    "less-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.8.0",
    "typescript": "^3.5.3", // 引入ts语法
    "url-loader": "^2.1.0",
    "webpack": "^4.39.2",
    "webpack-bundle-analyzer": "^3.4.1",
    "webpack-cli": "^3.3.7",
    "webpack-dev-server": "^3.8.0",
    "webpack-merge": "^4.2.1"
  },
  "dependencies": {
    "antd": "^3.22.0",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-router-dom": "^5.0.1"
  }
```
#### 新增typescript配置文件
直接使用typescript的demo进行配置，新增tsconfig.json
```JSON
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react"
    },
    "include": [
        "./src/**/*"
    ]
}
```
如果要在ts中引用js，需要在编译配置中添加设置`"allowJs":true`

#### 修改webpack配置
webpack中的编译配置新增
```json
{ 
    test: /\.tsx?$/, 
    loader: "awesome-typescript-loader" 
}
```
