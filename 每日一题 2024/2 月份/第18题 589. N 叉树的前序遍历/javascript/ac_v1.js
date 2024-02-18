/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];

    preOrder(root, res);

    return res;
};

function preOrder(node, buff) {
    if (!node) {
        return;
    }
    buff.push(node.val);
    if (!node.children) {
        return;
    }
    for (const n of node.children) {
        preOrder(n, buff);
    }
}
