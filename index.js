// task 1 - print array
// https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters

function printArray(arr) {
  return arr.toString();
}

// task 2 - Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

const fizzBuzz = function (n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i + "");
    }
  }

  return arr;
};

// task 3 - Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = function (s) {
  let string = s.trim();
  let lastWordLength = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === " ") {
      break;
    } else {
      lastWordLength++;
    }
  }
  return lastWordLength;
};

// task 4 - Reverse String
// https://leetcode.com/problems/reverse-string/

const reverseString = function (s) {
  const reverseString = [];
  for (let i = s.length - 1; i >= 0; i--) {
    reverseString.push(s[i]);
  }
  return reverseString;
  // тесты не прошли, т.к. нельзя создавать промежуточный массив
  // без промежуточного массива, решение будет такое:
  // return s.reverse()
};

// task 5 - Majority Element
// https://leetcode.com/problems/majority-element/

const majorityElement = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 1;
    obj[nums[i]]++;
  }

  const arr = Object.entries(obj);

  arr.sort(function ([keyA, valueA], [keyB, valueB]) {
    return valueB - valueA;
  });
  return arr[0][0];
};

// task 6 - Find Peak Element
// https://leetcode.com/problems/find-peak-element/

const findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] < nums[middle + 1]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return start;
};

// task 7 - Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  if (strs[0] === "" || strs.length === 0) return commonPrefix;

  outer: for (let i = 0; i < strs[0].length; i++) {
    commonPrefix += strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (commonPrefix[i] === strs[j][i]) continue;
      commonPrefix = commonPrefix.slice(0, i);
      break outer;
    }
  }

  return commonPrefix;
};

// task 8 - Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

const sortedSquares = function (A) {
  return A.map((item) => item ** 2).sort((a, b) => a - b);
};

// task 9 - Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/

const duplicateZeros = function (arr) {
  const length = arr.length;
  let index = arr.indexOf(0);
  while (index !== -1) {
    arr.splice(index, 0, 0);
    arr.length = length;
    index = arr.indexOf(0, index + 2);
  }
};

// task 10 - Plus One
// https://leetcode.com/problems/plus-one/

const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      return digits;
    }
  }

  digits.splice(0, 0, 1);

  return digits;
};

// task 11 - Add to Array-Form of Integer
// https://leetcode.com/problems/add-to-array-form-of-integer/

const addToArrayForm = function (A, K) {
  const result = [];
  const arrK = [];
  let balance = 0;

  for (let i = 0; i < K.toString().length; i++) {
    arrK[i] = Number(K.toString()[i]);
  }

  for (let i = A.length - 1; i >= 0; i--) {
    let numb = arrK.length ? arrK.pop() : 0;
    let sum = A[i] + numb + balance;

    if (sum >= 10) {
      result.unshift(sum % 10);
      balance = 1;
    } else {
      result.unshift(sum % 10);
      balance = 0;
    }
  }

  if (arrK.length) {
    for (let i = arrK.length - 1; i >= 0; i--) {
      let sum = arrK[i] + balance;

      if (sum >= 10) {
        result.unshift(sum % 10);
        balance = 1;
      } else {
        result.unshift(sum % 10);
        balance = 0;
      }
    }
  }

  if (balance) {
    result.unshift(balance);
  }

  return result;
};

// task 12 - Relative Sort Array
// https://leetcode.com/problems/relative-sort-array/submissions/

const relativeSortArray = function (arr1, arr2) {
  let obj = {};
  const copyArr2 = [...arr2];
  let rest = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (obj[arr1[i]]) {
        obj[arr1[i]]++;
      } else {
        obj[arr1[i]] = 1;
      }
    } else {
      rest.push(arr1[i]);
    }
  }

  rest.sort((a, b) => a - b);

  for (let i = 0; i < copyArr2.length; i++) {
    if (obj[copyArr2[i]]) {
      let countDigits = obj[copyArr2[i]] - 1;
      while (countDigits) {
        let index = arr2.indexOf(copyArr2[i]);
        arr2.splice(index, 0, copyArr2[i]);
        countDigits--;
      }
    }
  }

  arr2.push(...rest);

  return arr2;
};

// task 13 - Partition On
// https://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  let arrT = [];
  let arrF = [];

  for (let i = 0; i < items.length; i++) {
    if (pred(items[i])) {
      arrT.push(items[i]);
    } else {
      arrF.push(items[i]);
    }
  }

  items.length = 0;

  items.push(...arrF, ...arrT);

  return arrF.length;
}

// task 14 - Prefill an Array
// https://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {
  const number = parseFloat(n);
  if (!isFinite(number) || number < 0 || number % 1 !== 0)
    throw TypeError(n + " is invalid");
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(v);
  }

  return result;
}

// task 15 - Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/

const reverseVowels = function (s) {
  let str = [...s];
  const arrVowles = ["a", "e", "u", "i", "o", "A", "E", "U", "I", "O"];
  const indexVowles = [];

  for (let i = 0; i < str.length; i++) {
    if (!arrVowles.includes(str[i])) continue;
    indexVowles.push(i);
  }

  for (let i = 0; i < indexVowles.length; i++) {
    let reverseIndex = indexVowles[indexVowles.length - 1 - i];
    str[indexVowles[i]] = s[reverseIndex];
  }

  return str.join("");
};

// task 16 - Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let result = prices[j] - prices[i];
        profit = result > profit ? result : profit;
      }
    }
  }
  return profit;
};

// task 17 - Rotate Image
// https://leetcode.com/problems/rotate-image/

const rotate = function (matrix) {
  // меняем строки со столбцами 
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let interim = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = interim;
    }
  }

  // переворачиваем строку
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length / 2; j++) {
      let reverseItem = matrix[i][matrix[i].length - 1 - j];
      matrix[i][matrix[i].length - 1 - j] = matrix[i][j];
      matrix[i][j] = reverseItem;
    }
  }
};

// task 18 - Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array

const merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1.splice(m + i, 1, nums2[i]);
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

// task 19 - Valid Palindrome
// https://leetcode.com/problems/valid-palindrome

const isPalindrome = function (s) {
  s = s.toLowerCase();
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let charCode = s.codePointAt(i);
    // юникод символов ASCII: 48 - 57 (цифры) и 97 - 122 (буквы ниж. рег.)
    if (
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      str += s[i];
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};

// task 20 - Find Common Characters
// https://leetcode.com/problems/find-common-characters/

const commonChars = function (A) {
  let objCount = {};
  let result = [];

  function cacheLetters(word, obj) {
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  }

  cacheLetters(A[0], objCount);
  for (let i = 1; i < A.length; i++) {
    let cache = {};
    cacheLetters(A[i], cache);
    const arr = Object.keys(objCount);

    for (let j = 0; j < arr.length; j++) {
      if (cache.hasOwnProperty(arr[j])) {
        let count =
          objCount[arr[j]] > cache[arr[j]] ? cache[arr[j]] : objCount[arr[j]];
        objCount[arr[j]] = count;
      } else {
        delete objCount[arr[j]];
      }
    }
  }

  result.length = 0;

  Object.entries(objCount).map(([key, value]) => {
    let arr = Array(value).fill(key);
    result.push(...arr);
  });
  return result;
};

// task 21 - Remove Element
// https://leetcode.com/problems/remove-element/submissions/

const removeElement = function (nums, val) {
  while (true) {
    let index = nums.indexOf(val);
    if (index === -1) break;
    nums.splice(index, 1);
  }
  return nums.length;
};
