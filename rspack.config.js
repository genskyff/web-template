import { merge } from "webpack-merge";

import baseConfig from "./config/rspack.base.js";
import devConfig from "./config/rspack.dev.js";
import prodConfig from "./config/rspack.prod.js";

export default (_env, args) => {
  switch (args.mode) {
    case "development":
      return merge(baseConfig, devConfig);
    default:
      return merge(baseConfig, prodConfig);
  }
};
