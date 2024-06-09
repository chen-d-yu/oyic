import * as fs from "fs";
import * as path from "path";
import typescript from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";

const pkgPath = path.resolve(__dirname, "../../packages");
const distPath = path.resolve(__dirname, "../../dist/node_modules");

/**
 * 获取包的package.json
 * @param pkgName package.js下的buildOptions.name字段
 * @returns {Object}
 */
export function getPckJSON(pkgName) {
  try {
    const path = `${resolvePkgPath(pkgName)}/package.json`;
    const pkgContent = fs.readFileSync(path, "utf-8");
    return JSON.parse(pkgContent);
  } catch (e) {
    console.log("getPckJSON error", e);
  }
}

/**
 * 获取包的项目路径
 * @param pkgName package.js下的buildOptions.name字段
 * @param isDist 是否构建产物
 * @returns {string}
 */
export function resolvePkgPath(pkgName, isDist) {
  if (isDist) {
    return `${distPath}/${pkgName}`;
  }
  return `${pkgPath}/${pkgName}`;
}

/**
 * 获取公共的rollup插件配置
 * @param tsOpts
 * @returns {(*|)[]}
 */
export function getBaseRollupPlugins({ tsOpts = {} } = {}) {
  return [typescript(tsOpts), cjs()];
}

/**
 * 获取需要打包的文件夹下的所有文件集合，处理为 {name: path} 的形式
 * @param excludes 排除的文件
 * @return {Object}
 */
export function getBaseBuildFile(excludes = ["index"]) {}
