// https://leetcode.com/problems/reverse-linked-list/

const reverseList = function (head) {
  if (!head) return head;
  let node = head;
  let reverseList;

  while (node) {
    if (!reverseList) reverseList = null;
    let current = reverseList;
    reverseList = new ListNode(node.val, current);
    node = node.next;
  }
  return reverseList;
};