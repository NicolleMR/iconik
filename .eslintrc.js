module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "airbnb",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    "no-restricted-exports": "off",
    "react/function-component-definition": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "import/prefer-default-export": "off",
    "react/forbid-prop-types": "off",
    "no-debugger": "off",
  },
};
