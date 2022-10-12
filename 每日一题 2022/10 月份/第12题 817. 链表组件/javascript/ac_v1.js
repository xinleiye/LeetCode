/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    const numSet = new Set();
    for (const n of nums) {
        numSet.add(n);
    }

    let node = head;
    let inComponent = false;
    let res = 0;
    while (node) {
        if (numSet.has(node.val)) {
            if (!inComponent) {
                inComponent = true;
                res++;
            }
        } else {
            inComponent = false;
        }
        node = node.next;
    }

    return res;
};
