module.exports = {
	prefix: '',
	purge: {
		enabled: true,
		content: [
			'./src/**/*.{html,ts}'
		],
		options: {
			blocklist: []
		}
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
		},
	},
	variants: {
		extend: {
			backgroundColor: [ "active" ],
			textColor: [ "active" ],
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp')
	],
}
