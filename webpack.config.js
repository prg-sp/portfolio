const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['./src/js/main.js', './src/css/main.css'],
	output: {
		filename: 'js/[hash].main.js',
		path: path.resolve(__dirname, 'dist'),
	},

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

	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.css$/,
	// 			use: [
	// 				{
	// 					loader: 'file-loader',
	// 					options: {
	// 						name: 'css/main.css',
	// 					},
	// 				},
	// 				{
	// 					loader: 'extract-loader',
	// 				},
	// 				{
	// 					loader: 'css-loader',
	// 				},
	// 				{
	// 					loader: 'postcss-loader',
	// 				},
	// 				// {
	// 				// loader: 'sass-loader',
	// 				// },
	// 			],
	// 		},
	// 	],
	// },
};
