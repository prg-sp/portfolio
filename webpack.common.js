const path = require('path');

module.exports = {
	entry: ['./src/js/main.js', './src/css/stilizmas.css'],
	// entry: {
	// 	supercool: './src/js/main.js',
	// 	stiliuskas: './src/css/stilizmas.css',
	// },

	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-srcsets-loader',
				options: {
					attrs: ['img:src', ':srcset'],
				},
			},

			{
				test: /\.(svg|png|jpg|gif|webp)$/,
				exclude: [/node_modules/],
				use: {
					loader: 'file-loader',
					options: {
						esModule: false,
						name: '[name].[hash].[ext]',
						outputPath: 'foto',
					},
				},
				type: 'javascript/auto',
			},
		],
	},
};
