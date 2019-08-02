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
 * @Runtime 116 ms, faster than 63.08% of JavaScript online submissions for Add Two Numbers.
 * @Memory_Usage 38.9 MB, less than 21.76% of JavaScript online submissions for Add Two Numbers.
 */
/**
 * ac test case
 * [2,4,3], [5,6,4]
 * [2,4,3], []
 * [], [5,6,4]
 * [], []
 * [1,2,3], [4,5,8]
 * [1], [9,9,9,9]
 */
var addTwoNumbers = function(l1, l2) {
    let head;
    let pl1, pl2;
    let node;
    let sum = 0;
    let carry = 0;
    let remainder = 0;

    function doAdd (val1, val2) {
        sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        remainder = sum % 10;
    }

    if (l1 && !l2) {
        return l1;
    } else if (!l1 && l2) {
        return l2;
    }

    pl1 = l1;
    pl2 = l2;
    while (pl1 && pl2) {
        doAdd(pl1.val, pl2.val);
        if (head) {
            node.next = new ListNode(remainder);
            node = node.next;
        } else {
            head = new ListNode(remainder);
            node = head;
        }
        pl1 = pl1.next;
        pl2 = pl2.next;
    }
    while (pl1) {
        doAdd(pl1.val, 0);
        node.next = new ListNode(remainder);
        node = node.next;
        pl1 = pl1.next;
    }
    while (pl2) {
        doAdd(pl2.val, 0);
        node.next = new ListNode(remainder);
        node = node.next;
        pl2 = pl2.next;
    }
    if (carry) {
        node.next = new ListNode(carry);
    }
    return head;
};
