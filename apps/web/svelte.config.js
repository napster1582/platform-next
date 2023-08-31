import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { dirname, join } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({
		style: {
			css: {
				postcss: join(dirname('./'), 'postcss.config.js'),
			},
		},
	}),

	kit: {
		adapter: adapter({
			precompress: true,
			polyfill: false,
		}),

		csp: {
			directives: {
				'object-src': ['none'],
				'base-uri': ['self'],
				'script-src': ['self', 'unsafe-inline'],
				'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
			},
		},
	},
};

export default config;
