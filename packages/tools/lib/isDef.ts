/**
 * 检查值是否定义
 * @param value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isDef(undefined)
 * => false
 */
function isDef<T = unknown>(value?: T): value is T {
  return typeof value !== undefined;
}

export default isDef;
