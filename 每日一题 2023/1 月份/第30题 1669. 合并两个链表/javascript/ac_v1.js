/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let pre1 = list1;
    let index = 1;
    while (index < a) {
        pre1 = pre1.next;
        index++;
    }

    let pre2 = pre1;
    while (index <= b) {
        pre2 = pre2.next;
        index++;
    }
    pre2 = pre2.next;

    let tail2 = list2;
    while (tail2.next) {
        tail2 = tail2.next;
    }

    pre1.next = list2;
    tail2.next = pre2;

    return list1;
};
