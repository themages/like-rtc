import { babel } from "@rollup/plugin-babel";
import { input, version, external, watch, plugins } from "./rollup.config";
plugins.pop();
export default {
  input,
  plugins: [...plugins, babel({ babelHelpers: "bundled" })],
  output: [
    {
      file: "dev.js",
      format: "umd",
      name: "likeRTC",
      globals: {},
    },
  ],
  external,
  watch,
};
