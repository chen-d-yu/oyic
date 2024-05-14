import _is from "./_is";

/**
 * 判断是否为String
 * @param {any} value 需要判断的值
 * @returns {boolean} 结果
 *
 * @example
 *
 * isString("abc")
 * => true
 */
function isString(value: unknown): value is string {
  return _is("String")(value);
}
export default isString;
