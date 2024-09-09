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
var mergeNodes = function(head) {
    const newHead = new ListNode(-1, head);
    let pre = newHead;
    let cur = head;

    while (cur) {
        if (cur.val !== 0) {
            let sum = 0;

            while (cur && cur.val !== 0) {
                sum += cur.val;
                cur = cur.next;
            }
            pre.next = new ListNode(sum);
            pre = pre.next;
        } else {
            cur = cur.next;
        }
    }

    return newHead.next;
};
