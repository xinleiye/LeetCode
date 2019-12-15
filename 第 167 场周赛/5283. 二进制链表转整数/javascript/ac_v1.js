/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let res = 0;
    let node = head;

    while (node) {
        res= (res << 1) | node.val;
        node = node.next;
    }

    return res;
};
