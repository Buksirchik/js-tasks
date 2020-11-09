// https://leetcode.com/problems/merge-two-sorted-lists/

const mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null;
  let node = new ListNode();
  let head = node;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.val = l1.val;
      node.next = new ListNode();
      l1 = l1.next;
    } else {
      node.val = l2.val;
      node.next = new ListNode();
      l2 = l2.next;
    }
    node = node.next;
  }

  while (l1) {
    node.val = l1.val;
    node.next = l1 = l1.next;
    node = node.next;
  }

  while (l2) {
    node.val = l2.val;
    node.next = l2 = l2.next;
    node = node.next;
  }

  return head;
};