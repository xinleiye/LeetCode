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
    let preOrder = (node, parent) => {
        let next = null;

        if (!node) {
            return;
        }

        if (parent) {
            if (parent.right && parent.right !== node) {
                next = parent.right;
            } else {
                parent = parent.next;
                while (parent) {
                    if (parent.left) {
                        next = parent.left;
                        break;
                    }
                    if (parent.right) {
                        next = parent.right;
                        break;
                    }
                    parent = parent.next;
                }
            }
        }

        node.next = next;
        preOrder(node.right, node);
        preOrder(node.left, node);

    };

    preOrder(root, null);

    return root;
};
