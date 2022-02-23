const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//4.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		filename: 'js/[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [
		new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html',
		}),
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, //3. extract css into files
					'css-loader', //2. converts css to js
					'postcss-loader', // prefix
					//'sass-loader', //1. turns scss to css
				],
			},
		],
	},
});
