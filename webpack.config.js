import { merge } from "webpack-merge";

import baseConfig from "./config/webpack.base.js";
import devConfig from "./config/webpack.dev.js";
import prodConfig from "./config/webpack.prod.js";

export default (env, args) => {
  switch (args.mode) {
    case "development":
      return merge(baseConfig, devConfig);
    case "production":
      return merge(baseConfig, prodConfig);
    default:
      throw new Error(
        `No matching configuration was found for mode <${args.mode}>`,
      );
  }
};
