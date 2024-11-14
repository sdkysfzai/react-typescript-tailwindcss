import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      '@stylistic/max-len': ['off'],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@stylistic/quote-props': 'off',
      '@stylistic/no-multi-spaces': 'off',
      '@stylistic/brace-style': 'off',
      '@stylistic/no-trailing-spaces': 'off',
      '@stylistic/comma-dangle': 'off',
      '@stylistic/eol-last': 'off',
      '@stylistic/keyword-spacing': 'off',
      '@stylistic/space-before-blocks': 'off',
      '@stylistic/key-spacing': 'off',
      '@stylistic/padded-blocks': 'off',
      'prefer-const': 'warn',
      'require-jsdoc': 'off',
      '@stylistic/comma-spacing': 'off',
      'no-empty': 'off',
      '@stylistic/object-curly-spacing': 'off',
      '@stylistic/indent': ['off'],
      '@stylistic/quotes': 'off',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
