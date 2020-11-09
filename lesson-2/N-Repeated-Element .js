//https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

const repeatedNTimes = function (A) {
  let set = new Set();
  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) return A[i];
    set.add(A[i]);
  }
};
