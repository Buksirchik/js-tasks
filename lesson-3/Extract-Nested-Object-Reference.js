// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/

Object.prototype.hash = function (string) {
  let arrProperties = string.split(".");
  let obj = this;
  while (arrProperties.length) {
    let prop = arrProperties.shift();
    if (obj[prop] === undefined) return undefined;
    obj = obj[prop];
  }
  return obj;
};