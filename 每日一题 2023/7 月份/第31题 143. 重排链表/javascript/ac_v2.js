/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const nodes = [];
    const newHead = new ListNode();
    let currentNode = newHead;

    while (head) {
        nodes.push(head);
        head = head.next;
    }

    for (let i = 0, len = Math.floor(nodes.length / 2); i < len; i++) {
        currentNode.next = nodes[i];
        currentNode = currentNode.next;
        currentNode.next = nodes[nodes.length - i -1];
        currentNode = currentNode.next;
    }
    if (nodes.length % 2) {
        currentNode.next = nodes[(nodes.length - 1) / 2];
        currentNode = currentNode.next;
    }
    currentNode.next = null;

    return newHead.next;
};
