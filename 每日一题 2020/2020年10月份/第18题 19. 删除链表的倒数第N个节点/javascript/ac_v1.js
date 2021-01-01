/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode(0);
    let firstNode = newHead;
    let targetNode = newHead;
    let preNode;

    newHead.next = head;
    for (let i = 0; i < n; i++) {
        if (firstNode) {
            firstNode = firstNode.next;
        } else {
            // 题目保证 n 有效，此处非必须
            return null;
        }
    }

    while (firstNode) {
        preNode = targetNode;
        firstNode = firstNode.next;
        targetNode = targetNode.next;
    }

    preNode.next = targetNode.next;
    targetNode.next = null;

    return newHead.next;
};
