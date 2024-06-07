import { getBaseRollupPlugins, getPckJSON, resolvePkgPath } from "../utils";

const { name, module } = getPckJSON("tools");
const pkgPath = resolvePkgPath(name);
const pkgDistPath = resolvePkgPath(name, true);

export default [
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${pkgDistPath}/index.js`,
      name: "index.js",
      format: "umd",
    },
    plugins: getBaseRollupPlugins({
      typescript: {
        tsconfig: "tsconfig.json",
      },
    }),
  },
];
