/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const headLTx = new ListNode(0);
    const headGTx = new ListNode(0);
    let nodeLT = headLTx;
    let nodeGT = headGTx;
    let node = head;

    while (head) {
        node = head.next;
        if (head.val < x) {
            nodeLT.next = head;
            nodeLT = nodeLT.next;
        } else {
            nodeGT.next = head;
            nodeGT = nodeGT.next;
        }
        head = node;
    }

    nodeLT.next = headGTx.next;
    nodeGT.next = null;

    return headLTx.next;
};
