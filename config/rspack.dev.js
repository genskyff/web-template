import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshPlugin from "@rspack/plugin-react-refresh";

export default {
  mode: "development",
  output: {
    filename: "js/[name].js",
    assetModuleFilename: "assets/[name][ext]",
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
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    moduleIds: "named",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Dev",
      template: path.resolve("./index.html"),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ReactRefreshPlugin(),
  ],
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8000,
  },
};
