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
 * @Runtime 108 ms, faster than 86.81% of JavaScript online submissions for Add Two Numbers.
 * @Memory_Usage 38.6 MB, less than 41.58% of JavaScript online submissions for Add Two Numbers.
 */
var addTwoNumbers = function(l1, l2) {
    let head;
    let node;
    let sum = 0;
    let carry = 0;

    node = new ListNode(0);
    head = node;
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
        node = node.next;
        carry = Math.floor(sum / 10);
    }
    if (carry) {
        node.next = new ListNode(carry);
    }
    return head.next;
};
