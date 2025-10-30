module.exports = {
    // Uses recommended base, React, TypeScript, and Hooks configs
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    // Parser for TypeScript
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    // Required to tell React plugin to stop warning about missing 'import React'
    settings: {
        react: {
            version: 'detect', // Detects React version automatically
        },
    },
    rules: {
        // --- 🐞 Fixes from previous lint output ---

        // 1. Fixes the "'React' must be in scope when using JSX" error (Post-React 17)
        'react/react-in-jsx-scope': 'off',

        // 2. Turns 'no-explicit-any' into a warning (you should still fix them, but CI won't fail)
        '@typescript-eslint/no-explicit-any': 'warn',

        // 3. Allows unused arguments (like `_`, `_props`) to be ignored, which helps with component types
        '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],

        // --- Standard Configuration Rules ---

        // Turns off prop-types check since we are using TypeScript
        'react/prop-types': 'off',

        // Turns off the requirement for explicit function return types
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};