import _is from "./_is";

/**
 * 检查是否为一个函数类型，不会判断异步函数
 * @param {any} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isFunction()
 */
function isFunction<T = unknown>(value: unknown): value is T {
  return _is("Function")(value);
}
export default isFunction;
