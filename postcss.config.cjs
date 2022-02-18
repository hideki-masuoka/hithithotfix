const tailwindcss = require('tailwindcss');
const postcssNested = require('postcss-nested');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

const mode = process.env.NODE_ENV;

const config = {
	plugins: [
		postcssImport(),
		postcssNested(),
		require('tailwindcss/nesting')(require('postcss-nesting')),
		tailwindcss(),
		autoprefixer()
	]
};

module.exports = config;
