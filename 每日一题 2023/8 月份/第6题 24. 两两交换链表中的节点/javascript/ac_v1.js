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
    if (!head || !head.next) {
        return head;
    }

    const newHead = new ListNode(-1, head);
    let ppNode = newHead;
    let pNode = newHead.next;
    let curNode = newHead.next.next;

    while (pNode && curNode) {
        ppNode.next = curNode;
        pNode.next = curNode.next;
        curNode.next = pNode;
        ppNode = pNode;
        pNode = pNode.next;
        if (pNode) {
            curNode = pNode.next;
        }
    }

    return newHead.next;
};
