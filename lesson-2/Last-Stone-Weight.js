// https://leetcode.com/problems/last-stone-weight/

const lastStoneWeight = function (stones) {
  for (let i = 0; i < stones.length; ) {
    if (stones.length === 1) return stones[0];
    let maxFirst = Math.max(...stones);
    stones.splice(stones.indexOf(maxFirst), 1);

    let maxSecond = Math.max(...stones);
    stones.splice(stones.indexOf(maxSecond), 1);

    if (maxFirst > maxSecond) stones.push(maxFirst - maxSecond);
  }

  return 0;
};