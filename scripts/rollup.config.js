// https://www.rollupjs.com/guide/big-list-of-options
import alias from "@rollup/plugin-alias";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import path from "path";
const pathResolve = (p) => path.resolve(__dirname, p);
const version = require("../package.json").version;

const input = "src/index.js";
const plugins = [
  alias({
    "@": pathResolve("src"),
  }),
  nodeResolve(),
  commonjs(),
];
const external = [];
const watch = {
  exclude: "node_modules/**",
};

export { input, plugins, external, watch, version };
