const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: "3.39",
    },
  ],
  [
    "@babel/preset-react",
    {
      runtime: "automatic",
    },
  ],
  "@babel/preset-typescript",
];

const plugins = [];

export default (api) => {
  api.cache(true);

  return {
    presets,
    plugins,
  };
};
