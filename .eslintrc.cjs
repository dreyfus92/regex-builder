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
    'standard',
    'plugin:astro/recommended'
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json'
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
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
    '@typescript-eslint',
    'react',
    'simple-import-sort'
  ],
}
