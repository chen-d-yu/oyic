import path from "path";
import glob from "glob";
import {
  createSingleFileConfig,
  getFilePath,
  getCommonOptions,
  getCommonRollupPlugins,
} from "./utils";
import { uglify } from "rollup-plugin-uglify";

const {
  distPath,
  pkgPath,
  buildOptions: { module },
} = getCommonOptions("utils");

const packageDir = getFilePath("../packages");
const utilsDir = getFilePath("utils");
const utilsName = path.basename(utilsDir);
const normalizedPath = packageDir.split("\\").join(path.sep);
const pattenPath = `${normalizedPath}/${utilsName}/**/*.ts`;

const list = glob.globSync(pattenPath).map((file) => {
  // 获取每个文件需要打包的文件名称，也就是去除绝对路劲过后的filename
  const fileSplitStr = file.split("\\");
  const filename = fileSplitStr.at(-1);
  const name = path.relative(
    "",
    filename.slice(0, filename.length - path.extname(filename).length),
  );
  return createSingleFileConfig(
    { [name]: path.resolve(file) },
    { dir: `${distPath}/es`, format: "es" },
  );
});

export default [
  ...list,
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${distPath}/utils-es.js`,
      name: "index.js",
      format: "es",
    },
    plugins: [
      ...getCommonRollupPlugins({
        tsOpts: {
          tsconfig: "tsconfig.json",
        },
      }),
    ],
  },
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${distPath}/utils-es.min.js`,
      name: "index.js",
      format: "es",
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
