module.exports = {
  env: {
    es2022: true,
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'standard',
    'plugin:astro/recommended'
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json'
  },
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    "no-multiple-empty-lines": "off",
    "no-tabs": "off",
    "indent": ["warn", "tab"],
    "quotes": ["warn", "single"],
    "jsx-quotes": ["warn", "prefer-single"],
    "eol-last": "off"
  },
  overrides: [
    {
      "files": ["*.astro"],
      "parser": "astro-eslint-parser",
      "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "extraFileExtensions": [".astro"]
      },
      "rules": {
        "astro/no-set-html-directive": "error"
      }
    }
  ],
  plugins: [
    'react'
  ],
}
