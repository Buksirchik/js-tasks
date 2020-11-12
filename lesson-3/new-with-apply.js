// https://www.codewars.com/kata/new-with-apply

function construct(Class, ...arg) {
  const obj = Object.create(Class.prototype);
  Class.apply(obj, arg);
  return obj;
}