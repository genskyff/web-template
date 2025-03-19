import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

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
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Dev",
      template: path.resolve("./index.html"),
    }),
    new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8000,
  },
};
