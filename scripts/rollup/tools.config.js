import { getBaseRollupPlugins, getPckJSON, resolvePkgPath } from "../utils";
import generatePackageJson from "rollup-plugin-generate-package-json";

const { pkgName, name, module } = getPckJSON("tools");
const pkgPath = resolvePkgPath(pkgName);
const pkgDistPath = resolvePkgPath(name, true);
export default [
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${pkgDistPath}/index.js`,
      name: "index.js",
      format: "umd",
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
        baseContents: ({ name, description, version }) => ({
          name,
          description,
          version,
          main: "index.js",
        }),
      }),
    ],
  },
];
