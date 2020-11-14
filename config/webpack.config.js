const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.resolve(__dirname, '../src/'),
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[contenthash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'font/[name].[contenthash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
    new CopyWebpackPlugin([
      {
        from: 'public/',
        ignore: ['*.html'],
      },
    ]),
    new ESLintPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
}
