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
    let slow = head;
    let fast = head;
    let res = head;

    while (fast !== null) {
        slow = slow.next;
        if (fast.next === null) {
            return null;
        }
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
