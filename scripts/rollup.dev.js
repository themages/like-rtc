export default {
  input: "src/index.js",
  plugins: [],
  output: [
    {
      file: "dist/bundle.js",
      format: "umd",
      name: "likeRTC",
      globals: {},
    },
  ],
  external: [],
  watch: {
    exclude: "node_modules/**",
  },
};
