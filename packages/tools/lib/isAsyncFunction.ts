import _is from "./_is";

/**
 * 检查是否为AsyncFunction类型
 * @param {any} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 *
 * isAsyncFunction(async () => {})
 * => true
 */
function isAsyncFunction<T = any>(value: unknown): value is Promise<T> {
  return _is("AsyncFunction")(value);
}
export default isAsyncFunction;
