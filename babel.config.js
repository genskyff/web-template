const isDev = process.env.NODE_ENV === "development";

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

const plugins = [isDev && "react-refresh/babel"].filter(Boolean);

export default (api) => {
  api.cache(true);

  return {
    presets,
    plugins,
  };
};
