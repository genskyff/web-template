import path from "path";
import rspack from "@rspack/core";
import pkg from "../package.json" with { type: "json" };
import ReactRefreshPlugin from "@rspack/plugin-react-refresh";
import { TsCheckerRspackPlugin } from "ts-checker-rspack-plugin";

export default {
  mode: "development",
  output: {
    assetModuleFilename: "static/assets/[name][ext][query]",
    chunkFilename: "static/js/[name].chunk.js",
    filename: "static/js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        include: path.resolve("./src"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                namedExport: false,
                exportLocalsConvention: "as-is",
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
  plugins: [
    new rspack.HtmlRspackPlugin({
      title: "Webpack Dev",
      template: path.resolve("./index.html"),
    }),
    new ReactRefreshPlugin(),
    new TsCheckerRspackPlugin(),
  ],
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8000,
  },
};
