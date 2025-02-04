import { nodePolyfills } from "vite-plugin-node-polyfills";
import { mergeConfig } from "vitest/config";
import type { UserConfig } from "vitest/config";

import baseConfig from "./vite.base.config.mts";

const config: UserConfig = {
  plugins: [
    nodePolyfills({
      globals: {
        process: true,
        Buffer: true,
        global: true,
      },
      include: ["fs", "crypto", "buffer", "fs"],
      overrides: {
        fs: "memfs",
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["fsevents"],
  },
  test: {
    coverage: {
      reportsDirectory: "coverage/environments/browser",
    },
    browser: {
      headless: true,
      enabled: true,
      name: "chrome",
    },
  },
};

export default mergeConfig(baseConfig, config);
