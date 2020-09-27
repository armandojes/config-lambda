const path = require('path')
const { merge } = require('webpack-merge')
const master = require('./master')

const config = merge(master, {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, '../source/api/index.js')],
  output: {
    path: path.resolve(__dirname, '../api'),
    filename: 'api.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          emitFile: true
        }
      }
    ]
  },
  target: 'node',
  watch: process.env.NODE_ENV === 'development'
})

module.exports = config
