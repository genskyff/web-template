import path from "path";
import rspack from "@rspack/core";
import pkg from "../package.json" with { type: "json" };

const isDev = process.env.NODE_ENV === "development";

export default {
  entry: { index: path.resolve("./src/index.tsx") },
  output: {
    path: path.resolve("./dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        include: path.resolve("./src"),
        loader: "builtin:swc-loader",
        options: {
          env: {
            coreJs: "3.42",
            mode: "usage",
            targets: pkg.browserslist,
          },
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
            transform: {
              react: {
                runtime: "automatic",
                development: isDev,
                refresh: isDev,
              },
            },
          },
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(avif|bmp|gif|ico|jpg|jpeg|png|svg|webp)$/,
        include: path.resolve("./src"),
        type: "asset",
      },
      {
        test: /\.(aac|flac|m4a|mov|mp3|mp4|ogg|wav|webm)$/,
        include: path.resolve("./src"),
        type: "asset",
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        include: path.resolve("./src"),
        type: "asset",
      },
      {
        test: /\.(pdf|txt)$/,
        include: path.resolve("./src"),
        type: "asset",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", "..."],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new rspack.ContextReplacementPlugin(
      /moment[\\/]locale$/,
      /en|ja|zh-cn|zh-tw/,
    ),
  ],
};
