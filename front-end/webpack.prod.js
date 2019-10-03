const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Webpack v4+ will minify code in production mode by default.

module.exports = merge(common, {
	mode: 'production',
    output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
	  		title: 'Production',
	  		template: path.resolve(__dirname, 'public', 'index.html')
		})
	]
});
