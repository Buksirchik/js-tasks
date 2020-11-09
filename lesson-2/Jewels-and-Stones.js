// https://leetcode.com/problems/jewels-and-stones/

const numJewelsInStones = function (J, S) {
  const map = {};

  for (let i = 0; i < J.length; i++) {
    map[J[i]] = 0;
  }

  for (let i = 0; i < S.length; i++) {
    let number = isFinite(map[S[i]]);
    if (number) map[S[i]]++;
  }

  return Object.values(map).reduce((a, b) => a + b);
};
