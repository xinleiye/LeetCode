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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const arr = [];

    preOrder(root, arr);

    return arr;
};

function preOrder(node, buff) {
    if (!node) {
        return;
    }
    buff.push(node.val);
    preOrder(node.left, buff);
    preOrder(node.right, buff);
}
