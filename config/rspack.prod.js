import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import rspack from "@rspack/core";

export default {
  mode: "production",
  bail: true,
  output: {
    filename: "js/[name].[contenthash:8].js",
    assetModuleFilename: "assets/[name].[contenthash:8][ext][query]",
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
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    moduleIds: "deterministic",
    minimize: true,
    minimizer: [
      new rspack.LightningCssMinimizerRspackPlugin(),
      new rspack.SwcJsMinimizerRspackPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Prod",
      template: path.resolve("./index.html"),
    }),
    new rspack.CssExtractRspackPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].chunk.css",
    }),
  ],
  devtool: "source-map",
};
