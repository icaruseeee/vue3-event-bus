module.exports = {
    env: {
        browser: true, 
        node: true, 
        es6: true, 
        commonjs: true, 
        jest: true, 
    },

    extends: ['eslint:recommended'],

    globals: {},

    parser: '@typescript-eslint/parser',

    rules: {
        'no-control-regex': 'off',
        'no-prototype-builtins': 'off',
        'accessor-pairs': 'error',
        'class-methods-use-this': 'warn',
        'curly': ['warn', 'all'],
        'default-case': 'warn',
        'dot-location': ['warn', 'property'],
        'dot-notation': 'warn',
        'eqeqeq': ['error', 'smart'],
        'guard-for-in': 'warn',
        'no-else-return': 'warn',
        'no-empty-function': 'warn',
        'no-eval': 'warn',
        'no-extend-native': 'warn',
        'no-implicit-coercion': ['warn', { boolean: false }],
        'no-invalid-this': 'warn',
        'no-iterator': 'warn',
        'no-multi-spaces': 'warn',
        'no-multi-str': 'error',
        'no-new-func': 'warn',
        'no-new-wrappers': 'warn',
        'no-proto': 'error',
        'no-return-assign': 'warn',
        'no-return-await': 'warn',
        'no-self-compare': 'warn',
        'no-sequences': 'warn',
        'no-throw-literal': 'warn',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': ['warn', { allowShortCircuit: true }],
        'no-useless-call': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-return': 'warn',
        'require-await': 'warn',
        'wrap-iife': 'warn',
        'no-use-before-define': ['error', { functions: false }],
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': 'warn',
        'array-element-newline': ['warn', 'consistent'],
        'block-spacing': 'warn',
        'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': 'warn',
        'comma-style': 'warn',
        'computed-property-spacing': 'warn',
        'func-call-spacing': 'warn',
        'function-paren-newline': 'warn',
        'implicit-arrow-linebreak': 'warn',
        'indent': ['warn', 4, { SwitchCase: 1 }],
        'jsx-quotes': 'warn',
        'key-spacing': 'warn',
        'keyword-spacing': 'warn',
        'max-statements-per-line': ['error', { max: 2 }],
        'new-cap': 'warn',
        'new-parens': 'warn',
        'no-lonely-if': 'warn',
        'no-multi-assign': 'warn',
        'no-new-object': 'warn',
        'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
        'no-restricted-syntax': ['warn', 'WithStatement'],
        'no-tabs': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-whitespace-before-property': 'warn',
        'nonblock-statement-body-position': 'warn',
        'object-curly-newline': ['warn', { multiline: true, consistent: true }],
        'object-curly-spacing': ['warn', 'always'],
        'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        'operator-linebreak': ['warn', 'before'],
        'prefer-object-spread': 'warn',
        'quote-props': ['warn', 'consistent-as-needed'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'never'],
        'semi-spacing': 'warn',
        'semi-style': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        'space-in-parens': 'warn',
        'space-infix-ops': 'warn',
        'space-unary-ops': 'warn',
        'spaced-comment': 'warn',
        'switch-colon-spacing': 'warn',
        'template-tag-spacing': 'warn',
        'unicode-bom': 'warn',
        'arrow-body-style': 'warn',
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': 'warn',
        'no-duplicate-imports': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-rename': 'warn',
        'no-var': 'warn',
        'prefer-const': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'rest-spread-spacing': 'warn',
        'template-curly-spacing': 'warn', 
        '@typescript-eslint/no-unused-vars': 'warn',
    },

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
            ],

            parserOptions: {
                parser: '@typescript-eslint/parser',
            },

            plugins: [
                '@typescript-eslint',
            ],

            rules: {
                'no-prototype-builtins': 'off',
                '@typescript-eslint/no-unused-vars': 'warn',
                '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
                '@typescript-eslint/camelcase': 'off',
                '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none', requireLast: true }, singleline: { delimiter: 'comma', requireLast: false } }],
                '@typescript-eslint/ban-ts-ignore': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
                '@typescript-eslint/ban-ts-comment': ['warn'],
            },
        },
    ],
}
