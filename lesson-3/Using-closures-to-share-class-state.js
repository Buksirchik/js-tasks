// https://www.codewars.com/kata/53583765d5493bfdf5001b35

const Cat = (function () {
  const catsWeights = {};
  function Constructor(name, weight) {
    if (name === undefined && weight === undefined) {
      throw Error("invalid name or weight");
    }
    this.name = name;
    Object.defineProperty(this, "weight", {
      set: function (value) {
        catsWeights[name] = value;
        this._weight = value;
      },
      get: function () {
        return this._weight;
      },
    });
    this.weight = weight;
  }

  Constructor.averageWeight = function () {
    let resultWeight = Object.values(catsWeights).reduce((a, b) => a + b);
    return resultWeight / Object.values(catsWeights).length;
  };

  return Constructor;
})();