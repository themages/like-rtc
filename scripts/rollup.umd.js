import { babel } from "@rollup/plugin-babel";
import { input, version, external, watch, plugins } from "./rollup.config";
export default {
  input,
  plugins: [...plugins, babel({ babelHelpers: "bundled" })],
  output: [
    {
      file: "umd.js",
      format: "umd",
      name: "likeRTC",
      indent: true,
      globals: {},
      banner: "/* like-rtc version " + version + " */",
      footer: "/* follow me on https://github.com/tankan */",
    },
  ],
  external,
  watch,
};
