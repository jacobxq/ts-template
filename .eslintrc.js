module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        commonjs: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'standard'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        cordova: 'readonly',
        Camera: 'readonly',
        QRScanner: 'readonly',
        codePush: 'readonly',
        xf: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        // 'max-len': [1, 500, 2, { ignoreComments: true }],
        camelcase: 'off',
        semi: ['error', 'always'],
        indent: ['error', 4],
        'no-new': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-unused-expressions': ['error'],
    }
};
