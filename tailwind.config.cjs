const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'noto-sans-jp': ['"Noto Sans JP"', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')]
};

module.exports = config;
