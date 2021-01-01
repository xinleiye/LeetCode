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
var insertionSortList = function(head) {
    let tmpHead = new ListNode(Number.MIN_SAFE_INTEGER);

    while (head) {
        let preNode;
        let node = tmpHead;
        let newNode;

        while (node && node.val < head.val) {
            preNode = node;
            node = node.next;
        }
        newNode = new ListNode(head.val);
        newNode.next = preNode.next;
        preNode.next = newNode;
        head = head.next;
    }

    return tmpHead.next;
};
