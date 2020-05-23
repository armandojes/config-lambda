const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'

const config = {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, '../source/server/index.js')],
  output: {
    path: path.resolve(__dirname, '../api'),
    filename: 'server_render.js',
    libraryTarget: 'commonjs',
    publicPath: isProduction ? '' : 'http://localhost/'
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          emitFile: false
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  target: 'node',
  watch: !isProduction
}

module.exports = config
