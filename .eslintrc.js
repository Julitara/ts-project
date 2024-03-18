module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}', '**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'i18next', 'react-hooks'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-var-requires': 0,
    },
};
