// https://www.rollupjs.com/guide/big-list-of-options
const version = require("./package.json").version;
export default {
  input: "src/index.js",
  plugins: [],
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      //   paths: {},
      //   indent: "--no-indent",
      banner: "/* like-rtc version " + version + " */",
      footer: "/* follow me on https://github.com/tankan */",
      globals: {},
    },
  ],
  external: [],
  watch: {
    exclude: "node_modules/**",
  },
};
