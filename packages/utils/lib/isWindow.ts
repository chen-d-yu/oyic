import isClient from "./isClient";
import _is from "./_is";

/**
 * 检查当前环境是浏览器环境，并且window不是人为创建的
 * @param {any} value 检查类型的值
 * @returns {boolean} 结果
 *
 * @example
 * const window = {}
 * isWindow(window)
 * => false
 */
function isWindow(value: any): value is Window {
  return isClient() && _is("Window")(value);
}
export default isWindow;
