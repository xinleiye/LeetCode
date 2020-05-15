/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let res = Infinity;
    let preVal = null;
    let inOrder = function (node) {
        if (!node) {
            return;
        }
        inOrder(node.left);
        if (preVal !== null) {
            res = Math.min(res, node.val - preVal);
        }
        preVal = node.val;
        inOrder(node.right);
    };

    inOrder(root);

    return res;
};
