import _is from "./_is";

/**
 * 判断是否为RegExp类型
 * @param {any} value 需要判断的值
 * @returns {boolean} 结果
 *
 * @example
 *
 * isRegExp(/axnaoisd/)
 * => true
 */
function isRegExp(value: unknown): value is RegExp {
  return _is("RegExp")(value);
}
export default isRegExp;
