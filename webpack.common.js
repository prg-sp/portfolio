const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/js/main.js', './src/css/main.css'],

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html',
		}),
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
};
