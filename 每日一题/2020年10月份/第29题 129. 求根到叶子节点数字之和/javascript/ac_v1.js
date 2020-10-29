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
var sumNumbers = function(root) {
    let res = 0;
    let dfs = (node, pre) => {
        if (!node) {
            return res;
        }
        if (!node.left && !node.right) {
            res += pre * 10 + node.val;
            return;
        }
        dfs(node.left, pre * 10 + node.val);
        dfs(node.right, pre * 10 + node.val);
    };

    dfs(root, 0);

    return res;
};
