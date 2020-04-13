const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
        entry:'./src/index.js',
        output:{
            path: path.resolve(__dirname,'../dist'),
            filename: 'js/[name].[contenthash:8].js'
        },
        module:{
            rules: [
                {
                    test:/\.js$/,
                    use:'babel-loader?cacheDirectory=true',
                    include: path.resolve(__dirname,'../src/')
                },
                {
                    test:/\.s?css$/,
                    use:[
                        {
                            loader:MiniCssExtractPlugin.loader,
                            options:{
                                publicPath: '../'
                            }
                        },
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test:/\.(png|jpe?g|gif|svg)$/,
                    use:[
                        {
                            loader:'url-loader',
                            options:{
                                limit: 8192,
                                name:'img/[name].[contenthash:8].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)$/,
                    use:[
                        {
                            loader: 'file-loader',
                            options:{
                                name:'font/[name].[contenthash:8].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[id].[contenthash:8].css'
            }),
            new CopyWebpackPlugin([{
                from:'public/',
                ignore: ['*.html']
            }])
        ],
        resolve:{
            alias: {
                '@': path.resolve(__dirname, '../src')
            }
        }
    }