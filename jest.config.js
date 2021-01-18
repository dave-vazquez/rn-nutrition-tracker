module.exports = {
  preset: "jest-expo/universal",
  setupFiles: ["./jestSetupFile.js"],
  projects: [{ preset: "jest-expo/ios" }, { preset: "jest-expo/android" }],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
  globals: {
    __DEV__: true,
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.config.js",
    "!**/jest.setup.js",
    "!**/jestSetupFile.js",
    "!**/firebase/**",
    "!**/environment.js",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
