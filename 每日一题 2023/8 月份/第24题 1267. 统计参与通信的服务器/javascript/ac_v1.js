/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let res = 0;
    const preOrder = (node, max) => {
        if (!node) {
            return;
        }
        if (node.val >= max) {
            res++;
        }
        preOrder(node.left, Math.max(node.val, max));
        preOrder(node.right, Math.max(node.val, max));
    };

    preOrder(root, -1e4);

    return res;
};
