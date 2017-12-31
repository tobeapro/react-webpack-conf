import webpack from 'webpack'
import merge from 'webpack-merge'
import baseWebpackConfig from './webpack.base.conf'
export default merge(baseWebpackConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
