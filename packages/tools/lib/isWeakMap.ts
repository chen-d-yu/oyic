import _is from "./_is";

/**
 * 检查是否为一个WeakMap
 * @param {unknown} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isWeakMap(new WeakMap())
 * => true
 */
function isWeakMap(value: unknown): value is typeof WeakMap {
  return _is("WeakMap")(value);
}
export default isWeakMap;
