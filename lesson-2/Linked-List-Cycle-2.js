// https://leetcode.com/problems/linked-list-cycle-ii/

const detectCycle = function (head) {
  const map = new Map();
  let node = head;
  while (node) {
    if (map.has(node)) {
      return node;
    } else {
      map.set(node);
      node = node.next;
    }
  }
  return null;
};