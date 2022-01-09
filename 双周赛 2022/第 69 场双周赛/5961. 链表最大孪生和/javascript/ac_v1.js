/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let res = 0;
    const nums = [];
    let node = head;

    while (node) {
        nums.push(node.val);
        node = node.next;
    }
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        res = Math.max(res, nums[i] + nums[j]);
    }

    return res;
};
