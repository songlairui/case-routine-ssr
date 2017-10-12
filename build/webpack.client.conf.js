const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
  entry: './src/app/entry-client.js',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'mainfest',
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
})
