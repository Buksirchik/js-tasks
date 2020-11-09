// https://leetcode.com/problems/middle-of-the-linked-list/

const middleNode = function (head) {
  let list = head;
  let listLength = 0;

  while (list) {
    listLength++;
    list = list.next;
  }

  let stop = Math.floor(listLength / 2);
  list = head;

  while (true) {
    if (stop === 0) return list;
    stop--;
    list = list.next;
  }
};
