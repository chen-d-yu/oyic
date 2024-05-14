import _is from "./_is";

/**
 * 检查是否为Arguments类型
 * @param {any} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * function fn(){
 *   isArguments(arguments)
 * }
 * => true
 */
function isArguments(value: any): value is IArguments {
  return value !== null && _is("Arguments")(value);
}
export default isArguments;
