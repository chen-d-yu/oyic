import _is from "./_is";

/**
 * 检查是否为Array类型
 * 该方法代理了Array.isArray
 *
 * @param {any} value 需要判断的值
 * @returns {boolean} 判断结果
 *
 * @example
 *
 * isArray([1,2,3])
 * => true
 */
function isArray(value: any): value is Array<any> {
  return value && (Array.isArray(value) || _is("Array")(value));
}
export default isArray;
