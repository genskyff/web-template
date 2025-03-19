import { merge } from "webpack-merge";

import baseConfig from "./config/webpack.base.js";
import devConfig from "./config/webpack.dev.js";
import prodConfig from "./config/webpack.prod.js";

export default (_env, args) => {
  switch (args.mode) {
    case "development":
      return merge(baseConfig, devConfig);
    default:
      return merge(baseConfig, prodConfig);
  }
};
