import isNullOrUnDef from "./isNullOrUnDef";

function range(start: number, end?: number, step?: number) {
  // 只传递start，默认从1开始，结束则为start
  if (isNullOrUnDef(end)) {
    end = start
    start = 1
  }

  // 默认步长为1
  if (isNullOrUnDef(step)) {
    step = 1
  }

  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}


export default range
