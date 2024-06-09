import _is from "./_is";

/**
 * 检查是否为一个Set
 * @param {unknown} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isSet(new Set())
 * => true
 */
function isSet(value: unknown): value is typeof Set {
  return _is("Set")(value);
}
export default isSet;
