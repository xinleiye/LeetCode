/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let carry = 0;
    let node = head;
    let sum;

    while (l1 || l2) {
        sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        node.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        node = node.next;
    }

    if (carry) {
        node.next = new ListNode(carry);
    }

    return head.next;
};
