/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let lHead = null;
    let node = head;

    while (node) {
        let next = node.next;

        node.next = lHead;
        lHead = node;
        node = next;
    }

    return lHead;
};
