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
            "/assets": "./src/assets",
            "/api": "./src/api",
            "/common": "./src/common",
            "/contexts": "./src/contexts",
            "/screens": "./src/screens",
            "/NavigationService": "./src/NavigationService.js",
            "/global-styles": "./src/global-styles.js",
          },
        },
      ],
    ],
  };
};
