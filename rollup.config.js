const version = require("./package.json").version;
export default {
  input: "index.js",
  plugins: [],
  output: [
    {
      file: "dist/bundle.js",
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
