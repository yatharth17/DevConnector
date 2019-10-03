const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
  	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist-dev')
	},
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
	    contentBase: "./public",
	    hot: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist-dev']),
		new HtmlWebpackPlugin({
	  		title: 'Production',
	  		template: path.resolve(__dirname, 'public', 'index-dev.html')
		})
	]
});
