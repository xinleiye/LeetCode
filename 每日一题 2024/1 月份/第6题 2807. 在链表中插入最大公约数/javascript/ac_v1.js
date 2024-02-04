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
var insertGreatestCommonDivisors = function(head) {
    let preNode = head;
    let curNode = head.next;

    while (curNode) {
        const newNode = new ListNode(gcd(preNode.val, curNode.val), curNode);

        preNode.next = newNode;
        preNode = curNode;
        curNode = curNode.next;
    }

    return head;
};

function gcd (num1, num2) {
    let num;

    while (num2 > 0) {
        num = num1 % num2;
        num1 = num2;
        num2 = num;
    }

    return num1;
}
