/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;
    let dfs = (node) => {
        if (!node) {
            return;
        }
        dfs(node.right);
        node.val += sum;
        sum = node.val;
        dfs(node.left);
    };

    dfs(root);

    return root;
};
