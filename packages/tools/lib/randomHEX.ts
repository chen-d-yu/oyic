/**
 * 生成随机16进制颜色
 *
 * @param {string} symbol 颜色前缀
 * @returns {string} 返回一个随机16进制颜色
 * @example
 *
 * randomHEX()
 * // => #ffffff
 */
function randomHEX(symbol: string = "#") {
  return symbol + Math.random().toString(16).substring(2, 8).padEnd(6, "0");
}

export default randomHEX;
