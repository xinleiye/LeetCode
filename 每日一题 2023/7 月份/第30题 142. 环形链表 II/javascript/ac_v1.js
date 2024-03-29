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
    let fast = head;
    let slow = head;
    let res = head;

    while (fast) {
        if (fast.next === null) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            while (res !== slow) {
                res = res.next;
                slow = slow.next;
            }

            return res;
        }
    }

    return null;
};
