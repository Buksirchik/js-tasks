// https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.square = function () {
  return this.slice().map((i) => i ** 2);
};

Array.prototype.cube = function () {
  return this.slice().map((i) => i ** 3);
};

Array.prototype.average = function () {
  if (!this.length) return NaN;
  let sum = this.reduce((a, b) => a + b);
  return sum / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b);
};

Array.prototype.even = function () {
  return this.filter((i) => i % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((i) => i % 2 !== 0);
};