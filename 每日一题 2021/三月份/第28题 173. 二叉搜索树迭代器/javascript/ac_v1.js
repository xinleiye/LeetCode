/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    let length = 1;
    let tailNode = head;
    let tmpHead = head;

    if (k === 0 || !head) {
        return head;
    }

    while (tailNode.next) {
        length++;
        tailNode = tailNode.next;
    }

    for (let i = 0, len = length - k % length; i < len; i++) {
        tailNode.next = tmpHead;
        tmpHead = tmpHead.next;
        tailNode = tailNode.next;
        tailNode.next = null;
    }

    return tmpHead;
};
