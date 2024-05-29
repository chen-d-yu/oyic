import _is from "./_is";

/**
 * 检查是否为一个ArrayBuffer
 * @param {unknown} value 需要检查的值
 * @returns {boolean} 结果
 *
 * @example
 * isArrayBuffer(1)
 * => true
 */
function isArrayBuffer(value: unknown): value is typeof ArrayBuffer {
  return _is("ArrayBuffer")(value);
}
export default isArrayBuffer;
