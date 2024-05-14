import _is from "./_is";

/**
 * 判断是否为Boolean类型
 * @param {any} value 需要判断的值
 * @returns {boolean} 结果
 *
 * @example
 *
 * isBoolean(1)
 * => falses
 */
function isBoolean(value: unknown): value is boolean {
  return _is("Boolean")(value);
}
export default isBoolean;
