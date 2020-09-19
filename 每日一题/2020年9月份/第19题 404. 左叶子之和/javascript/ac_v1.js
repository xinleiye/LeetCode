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
var sumOfLeftLeaves = function(root) {
    let res = 0;
    let dfs = (node, dir) => {
        if (!node) {
            return;
        }
        if (dir === "l" && !node.left && !node.right) {
            res += node.val;
            return;
        }
        dfs(node.left, "l");
        dfs(node.right, "r");
    };
    
    dfs(root, "");

    return res;
};
