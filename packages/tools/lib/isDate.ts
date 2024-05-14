import _is from "./_is";

/**
 * 检查是否为Date类型
 * @param {any} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isDate(new Date())
 * => true
 */
export function isDate(value: unknown): value is Date {
  return _is("Date")(value);
}
export default isDate;
