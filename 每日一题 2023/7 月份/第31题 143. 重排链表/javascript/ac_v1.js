/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let halfHead= new ListNode(-1);
    let node = slow.next;
    slow.next = null;
    while (node) {
        const next = node.next;
        node.next = halfHead.next;
        halfHead.next = node;
        node = next;
    }

    const newHead = new ListNode(-1);
    node = newHead;
    slow = head;
    fast = halfHead.next;
    while (slow || fast) {
        node.next = slow;
        slow = slow.next;
        node = node.next;
        node.next = fast;
        if (fast) {
            fast = fast.next;
        }
        node = node.next;
    }

    return newHead.next;
};
