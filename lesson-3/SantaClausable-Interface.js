// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

function isSantaClausable(obj) {
  let { sayHoHoHo, distributeGifts, goDownTheChimney } = obj;
  return [sayHoHoHo, distributeGifts, goDownTheChimney].every(
    (fn) => typeof fn === "function"
  );
}