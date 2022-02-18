module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 1,
    'react/no-unused-prop-types': 1,
    'prettier/prettier': ['warn'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-unresolved': 0,
    'promise/always-return': 0,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // разрешаем в required
      },
    },
  ],
};
