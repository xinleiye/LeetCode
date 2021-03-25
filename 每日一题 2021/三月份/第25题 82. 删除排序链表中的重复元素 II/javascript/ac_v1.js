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
    let tmpHead = new ListNode();
    let tailNode = tmpHead;
    let currentNode = head;

    if (!head) {
        return null;
    }

    while (currentNode) {
        let nextNode = currentNode.next;

        if (nextNode) {
            if (currentNode.val !== nextNode.val) {
                currentNode.next = null;
                tailNode.next = currentNode;
                tailNode = tailNode.next;
            } else {
                while (nextNode && nextNode.val === currentNode.val) {
                    nextNode = nextNode.next;
                }
            }
        } else {
            currentNode.next = null;
            tailNode.next = currentNode;
            tailNode = tailNode.next;
        }
        currentNode = nextNode;
    }

    return tmpHead.next;
};
