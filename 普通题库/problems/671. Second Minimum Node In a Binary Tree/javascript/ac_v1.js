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
var findSecondMinimumValue = function(root) {
    let first = root.val;
    let second = Infinity;

    function dfs (node) {
        if (!node) {
            return;
        }
        if (node.val <= second && node.val !== first) {
            second = node.val;
        }
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return second === Infinity ? -1 : second;
};
