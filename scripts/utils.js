import * as fs from "fs";
import * as path from "path";
import ts from "rollup-plugin-typescript2";
import cjs from "@rollup/plugin-commonjs";

const pkgPath = path.resolve(__dirname, "../../packages");
const distPath = path.resolve(__dirname, "../../dist/node_modules");

export function getPckJSON(pkgName) {
  const path = `${resolvePkgPath(pkgName)}/package.json`;
  const pkgContent = fs.readFileSync(path, "utf-8");
  return JSON.parse(pkgContent);
}

export function resolvePkgPath(pkgName, isDist) {
  if (isDist) {
    return `${distPath}/${pkgName}`;
  }
  return `${pkgPath}/${pkgName}`;
}

export function getBaseRollupPlugins({ typescript = {} } = {}) {
  return [ts(typescript), cjs()];
}
