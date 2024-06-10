import * as fs from "fs";
import * as path from "path";
import ts from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";

const pkgPath = path.resolve(__dirname, "../../", "packages");
const distPath = path.resolve(__dirname, "../../", "dist/node_modules");
// console.log(path.basename(pkgPath)); 返回最后一部分，比如D:\code\project\oyic\scripts\utils-build\packages 返回packages
/**
 * 获取文件路径
 * @param {string} pkgName
 * @returns {string}
 */
const getFilePath = (pkgName) => {
  return path.resolve(pkgPath, pkgName);
};

/**
 * 获取构建目录路径
 * @param pkgName
 * @return {`${string}/${string}`}
 */
const getDistFilePath = (pkgName) => {
  return `${distPath}/${pkgName}`;
};

/**
 * 获取包下的package.json序列化后的对象
 * @param pkgName 需要获取json的包下的buildOptions.name
 * @return {*}
 */
const getPckJSON = (pkgName) => {
  try {
    const jsonPath = `${getFilePath(pkgName)}/package.json`;
    const content = fs.readFileSync(jsonPath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    console.log("getPckJSON error", e);
  }
};

/**
 * 获取公共的rollup插件
 * @param {*} options
 * @param {*} options.typescript
 * @return {Array<any>}
 */
const getCommonRollupPlugins = ({ typescript = {} } = {}) => {
  return [
    ts(typescript),
    cjs(),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"],
    }),
  ];
};

/**
 *
 * @param fileObj
 * @param output
 */
const createSingleFileConfig = (fileObj, output) => {
  return {
    input: fileObj,
    output: {
      ...output,
      name: "[name].js",

      sourcemap: false,
    },
    treeshake: true,
    plugins: [
      ...getCommonRollupPlugins({
        tsOpts: {
          tsconfig: "tsconfig.json",
        },
      }),
    ],
  };
};

/**
 * 获取一些公共的配置，比如name、buildOptions、distPath
 */
const getCommonOptions = (pkgName) => {
  const {
    name, // 发布到npm的name
    buildOptions,
  } = getPckJSON(pkgName);

  const pkgDistPath = getDistFilePath(name);
  const pkgPath = getFilePath(buildOptions.name);

  return {
    name,
    buildOptions,
    pkgPath,
    distPath: pkgDistPath,
  };
};

export {
  getFilePath,
  getDistFilePath,
  getPckJSON,
  getCommonRollupPlugins,
  createSingleFileConfig,
  getCommonOptions,
};
