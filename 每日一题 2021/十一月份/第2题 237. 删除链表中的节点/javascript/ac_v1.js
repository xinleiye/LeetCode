/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let nodeVal = 0;
    let preNode = new ListNode();

    preNode.next = node;
    while (node.next) {
        nodeVal = node.val;
        node.val = node.next.val;
        preNode = node;
        node = node.next;
        node.val = nodeVal;
    }
    preNode.next = null;
};
