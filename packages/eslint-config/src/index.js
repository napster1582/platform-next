module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['@typescript-eslint'],
	ignorePatterns: [
		'.DS_Store',
		'node_modules',
		'/dist',
		'/build',
		'/.svelte-kit',

		// Ignore files for PNPM, NPM and YARN
		'pnpm-lock.yaml',
		'package-lock.json',
		'yarn.lock',

		// Jinen
		'/packages/jinen-cms-annotations/src/auto-generated.ts',
	],
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/explicit-function-return-type': [
					'error',
					{
						allowHigherOrderFunctions: true,
						allowFunctionsWithoutTypeParameters: true,
						allowIIFEs: true,
					},
				],
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'variable',
						modifiers: ['const'],
						format: ['strictCamelCase', 'UPPER_CASE'],
					},
					{
						selector: 'function',
						format: ['strictCamelCase'],
					},
					{
						selector: 'parameter',
						format: ['strictCamelCase'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'memberLike',
						format: ['strictCamelCase', 'UPPER_CASE'],
					},
					{
						selector: 'memberLike',
						modifiers: ['private'],
						format: ['strictCamelCase'],
						leadingUnderscore: 'require',
					},
					{
						selector: 'typeLike',
						format: ['StrictPascalCase'],
					},
					{
						selector: 'enum',
						format: ['StrictPascalCase'],
					},
					{
						selector: 'enumMember',
						format: ['StrictPascalCase'],
					},
				],
			},
		},
	],
	rules: {
		'@typescript-eslint/no-empty-function': 'off',
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
