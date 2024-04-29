module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
