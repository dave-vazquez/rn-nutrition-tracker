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
      ],
    ],
  };
};
