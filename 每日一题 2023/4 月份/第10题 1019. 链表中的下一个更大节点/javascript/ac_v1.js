/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let node = head;
    const nums = [];
    while (node) {
        nums.push(node.val);
        node = node.next;
    }

    const total = nums.length;
    const res = new Array(total);
    const stack = [];
    let index = 0;
    while (index < total) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
            res[stack[stack.length - 1]] = nums[index];
            stack.pop();
        }
        stack.push(index);
        index++;
    }
    while (stack.length) {
        res[stack[stack.length - 1]] = 0;
        stack.pop();
    }

    return res;
};
