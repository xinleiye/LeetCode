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
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }

    const tmpHead = new ListNode(-200, head);
    let preNode = tmpHead;
    let currentNode = head;
    while (currentNode) {
        const value = currentNode.val;
        let next = currentNode.next;
        let repeat = false;
        if (next && next.val === value) {
            repeat = true;
            while (next && next.val === value) {
                next = next.next;
            }
        }
        if (repeat) {
            preNode.next = next;
            currentNode = next;
        } else {
            preNode = currentNode;
            currentNode = next;
        }
    }

    return tmpHead.next;
};
