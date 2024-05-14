import isNull from "./isNull";
import isUnDef from "./isUnDef";

/**
 * 检查是否为null或undefined
 * @param value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isNullOrUnDef(null)
 * => true
 */
function isNullOrUnDef(value: unknown): value is null | undefined {
  return isNull(value) || isUnDef(value);
}

export default isNullOrUnDef;
