// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const letterCombinations = function (digits) {
  if (digits === "") return [];
  let obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];
  for (let i = 0; i < digits.length; i++) {
    result[i] = obj[digits[i]].split("");
  }

  while (result.length > 1) {
    let last = result.pop();
    let penult = result.pop();
    let str = [];

    for (let i = 0; i < penult.length; i++) {
      for (let j = 0; j < last.length; j++) {
        str.push(penult[i] + last[j]);
      }
    }
    result.push([...str]);
  }

  return result[0];
};
