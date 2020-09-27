const path = require('path')
const { merge } = require('webpack-merge')
const master = require('./master')
var ip = require('ip')

const config = merge(master, {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, '../source/client.js')],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'app.js'
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: ip.address(),
    port: 8080,
    disableHostCheck: true
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
  target: 'web',
  watch: process.env.NODE_ENV === 'development'
})

module.exports = config
