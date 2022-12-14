module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['@emotion'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'error',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        bracketSpacing: false,
        arrowParens: 'avoid'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  }
}
