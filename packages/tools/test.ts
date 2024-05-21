import isRegExp from "./lib/isRegExp";

const reg = "asdajsd;l1jpa";
const reg2 = new RegExp(reg);

console.log(isRegExp(reg2));
console.log(typeof reg2);
