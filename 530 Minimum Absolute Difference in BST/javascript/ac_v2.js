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
 * @Runtime 68 ms, faster than 83.75% of JavaScript online submissions for Minimum Absolute Difference in BST.
 * @Memory_Usage 37.6 MB, less than 100.00% of JavaScript online submissions for Minimum Absolute Difference in BST.
 */
var getMinimumDifference = function(root) {
    let pre = -1;
    let res = Infinity;

    function inOrder (node) {
        if (!node) {
            return;
        }
        inOrder(node.left);
        if (pre >= 0) {
            res = Math.min(res, node.val - pre);
        }
        pre = node.val;
        inOrder(node.right);
    }

    inOrder(root);

    return res;
};
