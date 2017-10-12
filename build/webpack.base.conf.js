var path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  output: {
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src/app')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [['env', { modules: 'commonjs' }]],
          plugins: ['syntax-dynamic-import']
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}
