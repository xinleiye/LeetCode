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
var removeNodes = function(head) {
    const stack = [];
    let curNode = head;
    while (curNode) {
        const val = curNode.val;

        while (stack.length && stack[stack.length - 1] < val) {
            stack.pop();
        }
        stack.push(val);
        curNode = curNode.next;
    }

    let resHead = new ListNode(-1);
    let tailNode = resHead;
    for (const val of stack) {
        curNode = new ListNode(val, null);
        tailNode.next = curNode;
        tailNode = curNode;
    }

    return resHead.next;
};
