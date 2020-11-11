// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

const flatten = function (head) {
  if (head === null) return head;
  let stack = [head];

  let result = [];

  let newList = null;

  while (stack.length) {
    let currentNode = stack.pop();

    newList = result.push(currentNode);

    if (currentNode.next) {
      stack.push(currentNode.next);
    }

    if (currentNode.child) {
      stack.push(currentNode.child);
    }
  }

  for (let i = 0; i < result.length; i++) {
    result[i].child = null;
    result[i].next = result[i + 1];
    result[i].prev = result[i - 1];
    if (result[i + 1] === undefined) result[i].next = null;
    if (result[i - 1] === undefined) result[i].prev = null;
  }

  return result[0];
};