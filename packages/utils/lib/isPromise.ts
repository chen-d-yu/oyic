import _is from "./_is";
import isObject from "./isObject";
import isFunction from "./isFunction";
import IsFunction from "./isFunction";

/**
 * 检查是否为Promise
 * @param value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isPromise(Promise.resolve())
 * => true
 */
function isPromise(value: unknown) {
  return (
    _is("Promise")(value) &&
    isObject(value) &&
    isFunction(value.then) &&
    IsFunction(value.catch)
  );
}
export default isPromise;
