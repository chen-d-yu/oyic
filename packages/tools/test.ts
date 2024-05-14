import isObject from "./lib/isObject";
import isArray from "./lib/isArray";

function test() {
  console.log(isObject({ length: 1 }));
  console.log(isArray({ length: 1 }));
}

test();
