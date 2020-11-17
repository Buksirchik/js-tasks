// https://leetcode.com/problems/lru-cache/

const LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
    this.cache.set(key, value);
  } else if (this.capacity === this.cache.size) {
    const deleteKey = Array.from(this.cache.keys())[0];
    this.cache.delete(deleteKey);
    this.cache.set(key, value);
  } else {
    this.cache.set(key, value);
  }
};