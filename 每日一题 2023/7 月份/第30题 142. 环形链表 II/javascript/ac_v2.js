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
var detectCycle = function(head) {
    const nodeSet = new Set();
    let node = head;

    while (node) {
        if (nodeSet.has(node)) {
            return node;
        }
        nodeSet.add(node);
        node = node.next;
    }

    return null;
};
