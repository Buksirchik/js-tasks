// https://leetcode.com/problems/single-number/submissions/

const singleNumber = function (nums) {
  for (let item of nums) {
    if (nums.indexOf(item) === nums.lastIndexOf(item)) return item;
  }
};
