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
    let currentNode = head;
    while (currentNode) {
        const value = currentNode.val;
        let next = currentNode.next;
        while (next && next.val === value) {
            next = next.next;
        }
        currentNode.next = next;
        currentNode = next;
    }

    return tmpHead.next;
};
