// https://www.codewars.com/kata/555185132c0d4cca3d000197

function spyOn(func) {
  let callCount = 0;
  const values = [];
  const returnedResult = [];

  function spy(...arg) {
    callCount++;
    values.push(...arg);
    let result = func.apply(null, arg);
    returnedResult.push(result);

    return result;
  }

  spy.wasCalledWith = (val) => values.includes(val);
  spy.callCount = () => callCount;
  spy.returned = (val) => {
    return returnedResult.includes(val);
  };

  return spy;
}