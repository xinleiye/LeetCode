/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let pPreNode;
    let preNode;
    let currentNode;
    let newHead = new ListNode();

    if (!head || !head.next) {
        return head;
    }

    newHead.next = head;
    pPreNode = newHead;
    preNode = head;
    currentNode = head.next;

    while (preNode && currentNode) {
        preNode.next = currentNode.next;
        currentNode.next = preNode;
        pPreNode.next = currentNode;

        pPreNode = preNode;
        preNode = preNode.next;
        if (preNode) {
            currentNode = preNode.next;
        }
    }

    return newHead.next;
};
