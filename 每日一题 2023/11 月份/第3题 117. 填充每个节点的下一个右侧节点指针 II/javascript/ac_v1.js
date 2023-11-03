/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let start = root;

    while (start) {
        let cur = null;
        let parent = start;
        let nextStart = null;

        while (parent) {
            if (parent.left) {
                if (!nextStart) {
                    nextStart = parent.left;
                }
                if (cur) {
                    cur.next = parent.left;
                }
                cur = parent.left;
            }
            if (parent.right) {
                if (!nextStart) {
                    nextStart = parent.right;
                }
                if (cur) {
                    cur.next = parent.right;
                }
                cur = parent.right;
            }
            parent = parent.next;
        }
        start = nextStart;
    }

    return root;
};
