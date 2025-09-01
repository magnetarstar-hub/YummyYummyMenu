// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-native", "prettier"],
  env: {
    "react-native/react-native": true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error", // enforce prettier formatting as errors
    "react-native/no-inline-styles": "warn", // discourage inline styles (important with NativeWind)
    "react/prop-types": "off", // turn off prop-types if using TypeScript or not using them
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // warn on unused vars except args starting with _
    "react/react-in-jsx-scope": "off", // React import unnecessary since React 17+
    "no-console": "warn", // warn on console logs, avoid debug noise
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
