import isNumber from "./isNumber";

/**
 * 判断值是否为NaN类型
 * @param value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isNaN(NaN)
 * => true
 */
function _isNaN(value: unknown): value is typeof NaN {
  return isNumber(value) && isNaN(value);
}

export default _isNaN;
