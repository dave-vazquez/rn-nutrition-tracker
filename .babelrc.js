module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          root: ["./src"],
          alias: {
            _assets: "./src/assets",
            _utils: "./src/utils",
            _api: "./src/api",
            _common: "./src/common",
            _contexts: "./src/contexts",
            _screens: "./src/screens",
            _NavigationService: "./src/NavigationService.js",
            _globalstyles: "./src/global-styles.js",
          },
        },
      ],
    ],
  };
};