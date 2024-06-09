import _is from "./_is";

/**
 * 检查是否为number
 * @param {unknown} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isNumber(1)
 * => true
 */
function isNumber(value: unknown): value is number {
  return _is("Number")(value);
}
export default isNumber;
