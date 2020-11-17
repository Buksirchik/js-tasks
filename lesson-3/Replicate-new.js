// https://www.codewars.com/kata/558cb3df5f511f40d500001d

function nouveau(Constructor, ...arg) {
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, arg);
  if (result === null) return obj;
  if (typeof result === "object" || typeof result === "function") return result;

  return obj;
}
