/**
 * 检查是否为一个HEX颜色
 * @param {string} str hex color
 * @returns {boolean} 结果
 *
 * @example
 * isHexColor('#fff')
 * => true
 */
function isHexColor(str: string):str is string {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(str);
}

export default isHexColor
