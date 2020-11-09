// https://leetcode.com/problems/linked-list-cycle/

const hasCycle = function (head) {
  const map = new Map();
  let node = head;
  while (node) {
    if (map.has(node)) {
      return true;
    } else {
      map.set(node);
    }

    node = node.next;
  }

  return false;
};