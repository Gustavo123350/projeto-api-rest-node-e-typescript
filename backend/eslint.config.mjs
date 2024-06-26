import { browser, node } from "globals";
import { configs } from "typescript-eslint";

export default {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "single"
    ],
    semi: [
      "error",
      "always"
    ],
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-empty-interface": "off"
  },
  languageOptions: {
    globals: {
      ...browser,
      ...node
    }
  },
  ...configs.recommended
};
