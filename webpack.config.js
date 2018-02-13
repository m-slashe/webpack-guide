const path = require('path');
const webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./app/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			},
			{
				test: /\.html$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'html-loader',
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	]
};