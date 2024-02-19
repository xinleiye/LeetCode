/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];

    postOrder(root, res);

    return res;
};

function postOrder(node, buffer) {
    if (!node) {
        return;
    }

    if (node.children) {
        for (const n of node.children) {
            postOrder(n, buffer);
        }
    }
    buffer.push(node.val);
}
