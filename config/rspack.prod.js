import path from "path";
import rspack from "@rspack/core";
import pkg from "../package.json" with { type: "json" };

export default {
  mode: "production",
  bail: true,
  output: {
    filename: "static/js/[name].[contenthash:8].js",
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
    assetModuleFilename: "static/assets/[name].[contenthash:8][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        include: path.resolve("./src"),
        use: [
          rspack.CssExtractRspackPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                namedExport: false,
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "builtin:lightningcss-loader",
            options: {
              targets: pkg.browserslist,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    moduleIds: "deterministic",
    minimize: true,
    minimizer: [
      new rspack.LightningCssMinimizerRspackPlugin({
        extractComments: false,
        minimizerOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new rspack.SwcJsMinimizerRspackPlugin(),
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      title: "Webpack Prod",
      template: path.resolve("./index.html"),
    }),
    new rspack.CssExtractRspackPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
    }),
  ],
  devtool: "source-map",
};
