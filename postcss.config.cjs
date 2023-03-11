module.exports = () => {
	return {
		plugins: [
			require('autoprefixer')(),
			require('postcss-combine-media-query'),
			require('postcss-font-magician')({
				formats: 'wolf2 woff'
			})
		]
	}
}
