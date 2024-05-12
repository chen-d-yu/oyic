/**
 * 生成随机字符串
 *
 * @param {number} len 生成的长度
 * @returns {*} 返回一个随机字符串
 * @example
 *
 * randomString(10)
 * // => as1asv1aas
 */
function randomString(len: number): string {
  return len <= 11
    ? Math.random()
        .toString(36)
        .substring(2, 2 + len)
        .padEnd(len, "0")
    : randomString(11) + randomString(len - 11);
}

export default randomString;
