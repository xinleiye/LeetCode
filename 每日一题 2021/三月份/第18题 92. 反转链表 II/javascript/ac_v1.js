/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const newHead = new ListNode(0, head);
    let index = 1;
    let node = head;
    let preNode = newHead;
    let tail = null;

    while (index < left) {
        preNode = node;
        node = node.next;
        index++;
    }

    tail = node;
    preNode.next = null;

    while (index <= right) {
        let tmpNode = node.next;

        node.next = preNode.next;
        preNode.next = node;
        node = tmpNode;
        index++;
    }

    tail.next = node;

    return newHead.next;
};
