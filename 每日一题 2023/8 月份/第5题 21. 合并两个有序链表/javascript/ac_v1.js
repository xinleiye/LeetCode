/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const head = new ListNode(0);
    let cur = head;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            cur = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            cur = l2;
            l2 = l2.next;
        }
    }
    while (l1) {
        cur.next = l1;
        cur = l1;
        l1 = l1.next;
    }
    while (l2) {
        cur.next = l2;
        cur = l2;
        l2 = l2.next;
    }

    return head.next;
};
