import path from "path";
import rspack from "@rspack/core";
import pkg from "../package.json" with { type: "json" };
import ReactRefreshPlugin from "@rspack/plugin-react-refresh";
import { TsCheckerRspackPlugin } from "ts-checker-rspack-plugin";

export default {
  mode: "development",
  output: {
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    assetModuleFilename: "static/assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        include: path.resolve("./src"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                namedExport: false,
                localIdentName: "[name]__[local]",
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
    moduleIds: "named",
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      title: "Webpack Dev",
      template: path.resolve("./index.html"),
    }),
    new TsCheckerRspackPlugin(),
    new ReactRefreshPlugin(),
  ],
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8000,
  },
};
