import path from "path";
import webpack from "webpack";

export default {
  entry: { index: path.resolve("./src/index.tsx") },
  output: {
    path: path.resolve("./dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve("./src"),
        use: ["babel-loader"],
      },
      {
        test: /\.(bmp|gif|ico|jpg|jpeg|png|svg|webp)$/,
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
    extensions: [".js", ".jsx", ".ts", ".tsx", "..."],
    modules: [path.resolve("./src"), "node_modules"],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /moment[\\/]locale$/,
      /en|ja|zh-cn|zh-tw/,
    ),
  ],
};
