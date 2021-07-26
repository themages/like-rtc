import { input, version, external, watch, plugins } from "./rollup.config";
export default {
  input,
  plugins,
  output: [
    {
      file: "index.js",
      format: "esm",
      banner: "/* like-rtc version " + version + " */",
      footer: "/* follow me on https://github.com/tankan */",
      globals: {},
    },
  ],
  external,
  watch,
};
