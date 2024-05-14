import isObject from "./isObject";

/**
 * 检查是否为元素
 * @param {any} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * let ele = {
 *   tagName: "div"
 * }
 * isElement(ele)
 * => false
 */
function isElement(value: any) {
  return isObject(value) && !!value.tagName && value instanceof Node;
}

export default isElement;
