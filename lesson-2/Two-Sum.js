//https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if (map.has(key)) {
      return [map.get(key), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
