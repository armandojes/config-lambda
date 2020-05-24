const path = require('path')
const env = process.env.NODE_ENV
const webpack = require('webpack')

const config = {
  entry: ['regenerator-runtime/runtime', path.resolve(__dirname, '../source/client.js')],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'app.js',
    publicPath: env === 'development' ? 'http://localhost:8080/public' : 'http://localhost:3000/public'
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
          outputPath: '/'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  target: 'web',
  watch: env === 'development'
}

module.exports = config
