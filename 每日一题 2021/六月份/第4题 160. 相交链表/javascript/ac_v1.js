/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let nodeA = headA;
    let nodeB = headB;

    while (nodeA !== nodeB) {
        nodeA = nodeA === null ? headB : nodeA.next;
        nodeB = nodeB === null ? headA : nodeB.next;
    }

    return nodeA;
};
