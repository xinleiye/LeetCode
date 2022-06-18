/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    const node = new Node(insertVal);
    if (!head) {
        node.next = node;
        return node;
    }
    if (head.next === head) {
        head.next = node;
        node.next = head;
        return head;
    }

    let curNode = head;
    let nextNode = head.next;
    while (nextNode !== head) {
        if (curNode.val <= insertVal && nextNode.val >= insertVal) {
            break;
        }
        if (curNode.val > nextNode.val) {
            if (curNode.val < insertVal || nextNode.val > insertVal) {
                break;
            }
        }
        curNode = nextNode;
        nextNode = nextNode.next;
    }
    curNode.next = node;
    node.next = nextNode;

    return head;
};
