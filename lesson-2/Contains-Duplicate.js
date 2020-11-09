// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return true;
    else map[nums[i]] = 1;
  }

  return false;
};