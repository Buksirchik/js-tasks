// https://leetcode.com/problems/design-add-and-search-words-data-structure/

const WordDictionary = function () {
  this.words = {};
};

WordDictionary.prototype.addWord = function (word) {
  let obj = this.words;
  for (let letter of word) {
    if (!obj[letter]) {
      obj[letter] = {};
    }
    obj = obj[letter];
  }
  obj["end"] = true;
};

WordDictionary.prototype.search = function (word) {
  function find(i, obj, word) {
    if (i === word.length) {
      return obj["end"] ? true : false;
    }

    let letter = word[i];

    if (obj[letter]) {
      obj = obj[letter];
      return find(1 + i, obj, word);
    }

    if (letter === ".") {
      for (let key in obj) {
        if (find(1 + i, obj[key], word)) return true;
      }
    }

    return false;
  }

  return find(0, this.words, word);
};