// https://leetcode.com/problems/design-add-and-search-words-data-structure/

const WordDictionary = function () {
  this.words = [];
};

WordDictionary.prototype.addWord = function (word) {
  this.words.push(word);
};

WordDictionary.prototype.search = function (word) {
  let reqexp = new RegExp("^" + word + "$");

  for (let str of this.words) {
    if (str.match(reqexp)) return true;
  }

  return false;
};