var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: ['babel-polyfill','./app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2017','es2016','es2015']
      }
    }
  ]
}
};