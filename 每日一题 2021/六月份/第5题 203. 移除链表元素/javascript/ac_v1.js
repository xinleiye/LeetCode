/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let flagHead = new ListNode(-1, head);
    let preNode = flagHead;
    let currentNode = head;

    while (currentNode) {
        if (currentNode.val === val) {
            const tmpNode = currentNode;

            preNode.next = currentNode.next;
            currentNode = currentNode.next;
            tmpNode.next = null;
        } else {
            preNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    return flagHead.next;
};
