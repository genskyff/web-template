import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

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
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Prod",
      template: path.resolve("./index.html"),
    }),
    new MiniCssExtractPlugin({
      chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      filename: "static/css/[name].[contenthash:8].css",
    }),
  ],
  devtool: "source-map",
};
