import _is from "./_is";

/**
 * 检查是否为null值
 * @param value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isNull(null)
 * => true
 */
function isNull(value: unknown): value is null {
  return value === null;
}

export default isNull;
