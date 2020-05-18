/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let res = 0;

    function dfs (node) {
        if (!node) {
            return;
        }
        if (node.val >= L && node.val <= R) {
            res += node.val;
        }
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return res;
};
