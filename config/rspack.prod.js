import path from "path";
import rspack from "@rspack/core";
import pkg from "../package.json" with { type: "json" };

export default {
  mode: "production",
  bail: true,
  output: {
    assetModuleFilename: "static/assets/[name].[contenthash:8][ext][query]",
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
    filename: "static/js/[name].[contenthash:8].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        include: path.resolve("./src"),
        use: [
          rspack.CssExtractRspackPlugin.loader,
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
  optimization: {
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
      chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      filename: "static/css/[name].[contenthash:8].css",
    }),
  ],
  devtool: "source-map",
};
