module.exports = {
    env: {
        browser: true,
        meteor: true,
        node: true,
        es6: true
    },
    plugins: ['html'],
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'brace-style': [2, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        camelcase: [2, { properties: 'always' }],
        'keyword-spacing': [2],
        'eol-last': [2],
        'no-trailing-spaces': [2]
    },
    globals: {
        // Collections
        Persons: true,
        Modules: true,

        // Packages
        lodash: true,
        i18n: true,
        moment: true,
        Messenger: true
    }
};
