const path = require('path')
const master = require('./master')
const { merge } = require('webpack-merge')

const config = merge(master, {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, '../source/server/index.js')],
  output: {
    path: path.resolve(__dirname, '../api'),
    filename: 'server_render.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          emitFile: false
        }
      }
    ]
  },
  target: 'node',
  watch: process.env.NODE_ENV === 'development'
})

module.exports = config
