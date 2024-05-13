/**
 * @description 检查一个值是否属于某个类型。
 *
 * @param {string} type 类型
 * @returns {(value:unknown)=>boolean} 返回该类型的判断方法
 * @example
 *
 * const isFuntion = is('Function')
 */
function is(type: string) {
  return function (value: unknown) {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
  };
}
export default is;
