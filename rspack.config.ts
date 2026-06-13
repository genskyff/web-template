import type { Configuration } from '@rspack/core';
import { merge } from 'rspack-merge';

import baseConfig from './config/rspack.base';
import devConfig from './config/rspack.dev';
import prodConfig from './config/rspack.prod';

// biome-ignore lint/suspicious/noExplicitAny: _
export default (_env: any, args: any) => {
  switch (args.mode) {
    case 'development':
      return merge<Configuration>(baseConfig, devConfig);
    default:
      return merge<Configuration>(baseConfig, prodConfig);
  }
};
