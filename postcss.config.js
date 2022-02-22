module.exports = {
	plugins: [
		require('autoprefixer')({
			overrideBrowserslist: ['ie >= 8', 'last 7 version'],
		}),
	],
};
