module.exports = {
	extends: ['@jinen/eslint-config'],
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				'@typescript-eslint/naming-convention': 'off',
			},
		},
	],
};
