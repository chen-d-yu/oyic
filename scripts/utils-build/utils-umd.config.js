import { getBaseRollupPlugins, getPckJSON, resolvePkgPath } from "./utils";
import generatePackageJson from "rollup-plugin-generate-package-json";

const {
  name, // 发布到npm的name
  buildOptions: { name: pkgName, module },
} = getPckJSON("utils");
const pkgPath = resolvePkgPath(pkgName);
const pkgDistPath = resolvePkgPath(name, true);

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${pkgDistPath}/esm/index.js`,
      name: "index.js",
      format: "umd",
      sourcemap: true,
    },
    plugins: [
      ...getBaseRollupPlugins({
        tsOpts: {
          tsconfig: "tsconfig.json",
        },
      }),
      generatePackageJson({
        inputFolder: pkgPath,
        outputFolder: pkgDistPath,
        baseContents: ({
          name,
          description,
          version,
          exports,
          main,
          module,
        }) => ({
          name,
          description,
          version,
          exports,
          main,
          module,
        }),
      }),
    ],
  },
];
