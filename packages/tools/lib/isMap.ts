import _is from "./_is";

/**
 * 检查是否为一个Map
 * @param {unknown} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isMap(new Map())
 * => true
 */
function isMap(value: unknown): value is typeof Map {
  return _is("Map")(value);
}
export default isMap;
