// rollup.config.js
import swc from "@rollup/plugin-swc";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    nodeResolve(),
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
        },
        target: "es2018",
      },
    }),
  ],
};
