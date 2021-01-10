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
    let head = new ListNode(0);
    let preNode = head;
    let node;
    let index = 0;

    node = list1;
    while (index < a) {
        preNode.next = node;
        preNode = preNode.next;
        node = node.next;
        index++;
    }

    while (list2) {
        preNode.next = list2;
        preNode = preNode.next;
        list2 = list2.next;
    }

    while (index < b) {
        node = node.next;
        index++;
    }

    preNode.next = node.next;
    node = null;

    return head.next;
};
