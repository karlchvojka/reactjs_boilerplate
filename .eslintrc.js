const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'testing-library'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    indent: ['error', 2],
    'arrow-body-style': ['error', 'as-needed'],
    'linebreak-style': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'import/prefer-default-export': [
      ('off' || 'warn' || 'error'),
      { target: 'any' }
    ]
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ],
  settings: {
    react: {
      version: 'detect'
    },
    jest: {
      // eslint-disable-next-line
      version: require('jest/package.json').version
    },
    'import/resolver': {
      alias: {
        map: [
          ['src', path.resolve(__dirname, 'src/')],
          ['globalAssets', path.resolve(__dirname, 'src/globalAssets')],
          ['globalConfig', path.resolve(__dirname, 'src/globalConfig')],
          ['layouts', path.resolve(__dirname, 'src/components/layouts')],
          ['modules', path.resolve(__dirname, 'src/components/modules')]
        ]
      }
    }
  }
}
