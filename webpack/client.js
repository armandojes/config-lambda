const path = require('path')

const config = {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, '../source/client.js')],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'app.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/(node_modules)/',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  target: 'web',
  watch: process.env.NODE_ENV === 'development'
}

module.exports = config