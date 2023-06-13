module.exports = {
    root: true,
    ignorePatterns: ['*.cjs'],
    overrides: [
        {
            files: ['*.svelte'],
            plugins: ['svelte3'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'prettier',
            ],
            processor: 'svelte3/svelte3',
            rules: {
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/explicit-function-return-type': 'error',
                '@typescript-eslint/no-explicit-any': 'error',
            },
        },
        {
            files: ['*.ts'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'prettier',
            ],
            parserOptions: {
                project: true,
                tsconfigRootDir: './',
            },
            rules: {
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/explicit-function-return-type': 'error',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'variable',
                        modifiers: ['const'],
                        format: ['strictCamelCase', 'UPPER_CASE'],
                    },
                    {
                        selector: 'variable',
                        types: ['boolean'],
                        format: ['StrictPascalCase'],
                        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
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
        {
            files: ['*.html'],
            extends: [
                'plugin:@angular-eslint/template/recommended',
                'plugin:@angular-eslint/template/accessibility',
            ],
            rules: {},
        },
    ],
};
