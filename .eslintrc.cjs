module.exports = {
    root: true,
    extends: ['@nuxtjs/eslint-config-typescript'],
    rules: {
        indent: 'off',
        semi: ['error', 'always'],
        curly: 'off',
        quotes: ['error', 'single', { avoidEscape: true }],
        eqeqeq: 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-return-assign': 'off',
        'no-trailing-spaces': 'error',
        'no-use-before-define': 'off',
        'no-prototype-builtins': 'off',
        'prefer-regex-literals': 'off',
        'import/no-named-as-default-member': 'off',
        'brace-style': ['error', 'allman'],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        'padding-line-between-statements': ['error',
            { blankLine: 'always', prev: ['if', 'for', 'while', 'do', 'switch', 'throw', 'try'], next: ['*'] },
            { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'do', 'switch', 'throw', 'try'] },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'return' }
        ],
        'vue/html-indent': ['error', 4],
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/component-tags-order': ['error', {
            order: ['script', 'template', 'style']
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: { max: 5 },
            multiline: { max: 1 }
        }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    }
};
