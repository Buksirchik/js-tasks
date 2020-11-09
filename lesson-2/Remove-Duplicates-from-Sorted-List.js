// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

const deleteDuplicates = function (head) {
  let node = head;

  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
};