module.exports = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: {
		parserOpts: {
			issuePrefixes: ['- #'],
		},
	},
	rules: {
		'type-empty': [2, 'never'],
		'type-case': [2, 'always', 'lower-case'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
				'release',
			],
		],
		'scope-empty': [1, 'never'],
		'scope-case': [2, 'always', 'kebab-case'],
		'scope-enum': [2, 'always', ['docs', 'cms', 'web']],
		'subject-empty': [2, 'never'],
		'header-max-length': [2, 'always', 130],
		'footer-leading-blank': [2, 'always'],
		'footer-max-line-length': [2, 'always', 130],
		'references-empty': [2, 'never'],
	},
};
