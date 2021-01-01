/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head ? head.next : null;

    while (slow && fast) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next;
        if (fast) {
            fast = fast.next;
        } else {
            break;
        }
    }

    return false;
};
