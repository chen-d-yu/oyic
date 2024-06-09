import _is from "./_is";

/**
 * 判断是否为Symbol类型
 * @param {any} value 需要判断的值
 * @returns {boolean} 结果
 *
 * @example
 *
 * isRegExp(/axnaoisd/)
 * => true
 */
function isSymbol(value: unknown): value is symbol {
  return _is("Symbol")(value);
}
export default isSymbol;
