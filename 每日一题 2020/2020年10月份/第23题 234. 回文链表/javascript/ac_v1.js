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
var isPalindrome = function(head) {
    let newHead = head;
    let stack = [];

    while (newHead) {
        stack.push(newHead.val);
        newHead = newHead.next;
    }

    for (let i = 0, len = Math.floor(stack.length / 2); i < len; i++) {
        if (stack[i] !== stack[stack.length - 1 - i]) {
            return false;
        }
    }

    return true;
};
