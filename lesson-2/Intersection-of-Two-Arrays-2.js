// https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = function (nums1, nums2) {
  const map = new Map();
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      let count = map.get(nums1[i]) + 1;
      map.set(nums1[i], count);
    } else {
      map.set(nums1[i], 1);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      let count = map.get(nums2[i]);
      if (count === 0) continue;
      result.push(nums2[i]);
      map.set(nums2[i], count - 1);
    }
  }

  return result;
};