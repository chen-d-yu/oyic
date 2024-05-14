import isDef from "./isDef";

/**
 * 检查是否为未定义
 * @param value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isUnDef(undefined)
 * => true
 */
function isUnDef<T = unknown>(value?: T): value is T {
  return !isDef(value);
}
export default isUnDef;
