module.exports = {
	extends: ['@jinen/eslint-config', 'plugin:svelte/recommended'],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	settings: {
		svelte: {
			kit: {
				files: {
					routes: 'src/routes',
				},
			},
		},
	},
	rules: {
		'svelte/no-at-html-tags': 'off',
	},
};
