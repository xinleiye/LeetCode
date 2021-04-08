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
        return null;
    } else {
        let tmpHead = new ListNode();
        let tailNode = tmpHead;
        let currentNode = head.next;

        tmpHead.next = head;
        tailNode = tmpHead.next;
        head.next = null;
        while (currentNode) {
            if (currentNode.val !== tailNode.val) {
                tailNode.next = currentNode;
                currentNode = currentNode.next;
                tailNode = tailNode.next;
                tailNode.next = null;
            } else {
                while (currentNode && currentNode.val === tailNode.val) {
                    currentNode = currentNode.next;
                }
            }
        }

        return tmpHead.next;
    }
};
