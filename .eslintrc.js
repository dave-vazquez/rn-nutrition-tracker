/* eslint-disable prettier/prettier */
module.exports = {
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: ["react", "react-native", "react-hooks", "prettier", "import"],
  parser: "babel-eslint",
  env: {
    jest: true,
    "react-native/react-native": true,
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js"],
      },
    ],
    "no-unused-vars": 1,
    "react/prop-types": 0,
    "react/display-name": 0,
    "comma-dangle": 0,
    "arrow-body-style": 0,
    "react-hooks/exhaustive-deps": 1,
    "react-native/no-unused-styles": 1,
    "react-native/split-platform-components": 2,
    "react-native/no-raw-text": 0,
    "react-native/no-single-element-style-arrays": 2,
    "prettier/prettier": 1,
  },
  globals: {
    fetch: false,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        alias: {
          _api: "./src/api",
          _hooks: "./src/hooks",
          _utils: "./src/utils",
          _assets: "./src/assets",
          _screens: "./src/screens",
          _contexts: "./src/contexts",
          _constants: "./src/constants",
          _formrules: "./src/form-rules",
          _global_styles: "./src/styles",
          _components: "./src/components",
          _navigation: "./src/navigation",
        },
      },
    },
  },
}
