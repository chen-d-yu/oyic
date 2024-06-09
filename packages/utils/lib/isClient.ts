/**
 * 检查当前环境是否为客户端（浏览器）
 * @returns 结果
 *
 * @example
 * isClient()
 * => false
 */
function isClient() {
  return typeof window !== "undefined";
}
export default isClient;
