const path = require('path')
const webpack = require('webpack')

const config = {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, '../source/api/index.js')],
  output: {
    path: path.resolve(__dirname, '../api'),
    filename: 'api.js',
    libraryTarget: 'commonjs'
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
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      hooks: path.resolve(__dirname, '../source/app/hooks'),
      helpers: path.resolve(__dirname, '../source/app/helpers'),
      components: path.resolve(__dirname, '../source/app/components'),
      config: path.resolve(__dirname, '../source/config'),
      models: path.resolve(__dirname, '../source/api/models')
    }
  },
  target: 'node',
  watch: process.env.NODE_ENV === 'development'
}

module.exports = config
