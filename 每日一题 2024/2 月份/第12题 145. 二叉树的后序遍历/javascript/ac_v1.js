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
var postorderTraversal = function(root) {
    const res = [];

    postOrder(root, res);

    return res;
};

function postOrder(node, buff) {
    if (!node) {
        return;
    }
    postOrder(node.left, buff);
    postOrder(node.right, buff);
    buff.push(node.val);
}
