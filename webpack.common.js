const path = require('path');
//5.
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const glob = require('glob');

module.exports = {
	entry: ['./src/js/main.js', './src/css/stilizmas.css'],
	// entry: {
	// 	supercool: './src/js/main.js',
	// 	stiliuskas: './src/css/stilizmas.css',
	// },

	// plugins: [
	// 	new ImageminPlugin({
	// 		externalImages: {
	// 			context: '.',
	// 			source: glob.sync('src/assets/**/*.{png,jpg,jpeg,gif,svg}'),
	// 			destination: 'dist/foo',
	// 			filename: '[name].[ext]',
	// 		},
	// 	}),
	// ],

	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-srcsets-loader',
				options: {
					attrs: ['img:src', ':srcset', ':custom-src'],
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

			{
				loader: 'image-webpack-loader',
				options: {
					bypassOnDebug: true, // webpack@1.x
					disable: true, // webpack@2.x and newer
				},
			},

			// {
			// 	loader: 'image-webpack-loader',
			// 	options: {
			// 		mozjpeg: {
			// 			progressive: true,
			// 		},
			// 		// optipng.enabled: false will disable optipng
			// 		optipng: {
			// 			enabled: false,
			// 		},
			// 		pngquant: {
			// 			quality: [0.65, 0.9],
			// 			speed: 4,
			// 		},
			// 		gifsicle: {
			// 			interlaced: false,
			// 		},
			// 		// the webp option will enable WEBP
			// 		webp: {
			// 			quality: 75,
			// 		},
			// 	},
			// },
		],
	},
};
