const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'js/main.[hash:7].js'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:'babel-loader'
            },
            {
                test:/\.(css|less)$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,  
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader" 
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
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:7].css',
            chunkFilename: 'css/[id].[hash:7].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CopyPlugin([
            { from: 'public', to: '../dist', ignore: ['*.html'] },
        ])
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
          'src': path.resolve(__dirname, '../src')
        }
    },
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
    }
}