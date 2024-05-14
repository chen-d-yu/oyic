import _is from "./_is";

/**
 * 检查是否为Object
 * @param {any} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isObject({})
 * => true
 */
function isObject(value: any): value is Record<any, any> {
  return value !== null && _is("Object")(value);
}
export default isObject;
