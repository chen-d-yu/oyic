import _is from "./_is";

/**
 * 检查是否为一个WeakSet
 * @param {unknown} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isWeakSet(new WeakSet())
 * => false
 */
function isWeakSet(value: unknown): value is typeof WeakSet {
  return _is("WeakSet")(value);
}
export default isWeakSet;
