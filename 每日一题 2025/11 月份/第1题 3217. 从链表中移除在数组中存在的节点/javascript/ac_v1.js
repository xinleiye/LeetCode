/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const numSet = new Set();
    for (const n of nums) {
        numSet.add(n);
    }

    const newHead = new ListNode(-1);
    let cur = newHead;
    let node = head;
    while (node) {
        if (!numSet.has(node.val)) {
            cur.next = new ListNode(node.val);
            cur = cur.next;
        }
        node = node.next;
    }

    return newHead.next;
};
