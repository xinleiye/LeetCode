/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];

    function preOrder (node) {
        if (!node) {
            return;
        }
        res.push(node.val);
        for (let i = 0, len = node.children.length; i < len; i++) {
            preOrder(node.children[i]);
        }
    }

    preOrder(root);

    return res;
};
