import { getCommonRollupPlugins, getCommonOptions } from "./utils";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { uglify } from "rollup-plugin-uglify";

const {
  distPath,
  pkgPath,
  buildOptions: { module },
} = getCommonOptions("utils");

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${distPath}/utils-umd.js`,
      name: "index.js",
      format: "umd",
    },
    plugins: [
      ...getCommonRollupPlugins({
        tsOpts: {
          tsconfig: "tsconfig.json",
        },
      }),
      generatePackageJson({
        inputFolder: pkgPath,
        outputFolder: distPath,
        baseContents: ({ buildOptions, typings, scripts, ...restField }) =>
          restField,
      }),
    ],
  },
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${distPath}/utils-umd.min.js`,
      name: "index.js",
      format: "umd",
      sourcemap: true,
    },
    plugins: [
      ...getCommonRollupPlugins({
        tsOpts: {
          tsconfig: "tsconfig.json",
        },
      }),
      uglify(),
    ],
  },
];
