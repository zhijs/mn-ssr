const baseConfig = require('./base')
const path = require('path')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// baseConfig
//   .entry('main')
//   .clear()
//   .add('client.js')
//   .end()
//   .output
//   .path(path.resolve(__dirname, '../../', 'dist'))
//   .filename('[name].bundle.js');

// console.log('baseConfig-----ssss-', baseConfig.entryPoints)
module.exports = merge(baseConfig, {
  entry: {
    main: './entry/client.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ] 
})
