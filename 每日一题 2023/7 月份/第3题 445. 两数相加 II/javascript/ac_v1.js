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
    const num1 = generateNum(l1);
    const num2 = generateNum(l2);
    let carry = 0;
    let head = new ListNode();
    let index1 = 0;
    const total1 = num1.length;
    let index2 = 0;
    const total2 = num2.length;

    while (index1 < total1 || index2 < total2) {
        let sum = carry;

        if (index1 < total1) {
            sum += num1[index1];
            index1++;
        }
        if (index2 < total2) {
            sum += num2[index2];
            index2++;
        }
        head.next = new ListNode(sum % 10, head.next);
        carry = sum >= 10 ? 1 : 0;
    }
    if (carry) {
        head.next = new ListNode(carry, head.next);
    }

    return head.next;
};

function generateNum(list) {
    const arr = [];

    while (list) {
        arr.unshift(list.val);
        list = list.next;
    }

    return arr;
}
