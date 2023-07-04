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
    const flag = new ListNode();
    let n1 = l1;
    let n2 = l2;
    let carry = 0;
    let tail = flag;

    while (n1 || n2) {
        let sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0) + carry;

        tail.next = new ListNode(sum % 10);
        tail = tail.next;
        carry = sum >= 10 ? 1 : 0;
        n1 = n1 ? n1.next : null;
        n2 = n2 ? n2.next : null;
    }
    if (carry) {
        tail.next = new ListNode(carry);
    }

    return flag.next;
};
