/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    const flattenChild = (node) => {
        const tmpHead = new Node(0, null, node, null);
        let curNode = node;
        let preNode = tmpHead;

        while (curNode) {
            if (curNode.child) {
                const [headNode, tailNode] = flattenChild(curNode.child);

                tailNode.next = curNode.next;
                if (curNode.next) {
                    curNode.next.prev = tailNode;
                }
                headNode.prev = curNode;
                curNode.next = headNode;
                curNode.child = null;
                curNode = tailNode.next;
                preNode = tailNode;
            } else {
                preNode = curNode;
                curNode = curNode.next;
            }
        }

        return [tmpHead.next, preNode];
    };

    if (head) {
        flattenChild(head);
    }

    return head;
};
