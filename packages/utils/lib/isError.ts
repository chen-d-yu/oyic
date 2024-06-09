import _is from "./_is";

/**
 * 检查是否为一个Error
 * @param {unknown} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isError(new Error())
 * => true
 */
function isError(value: unknown): value is typeof Error {
  return _is("Error")(value);
}
export default isError;
