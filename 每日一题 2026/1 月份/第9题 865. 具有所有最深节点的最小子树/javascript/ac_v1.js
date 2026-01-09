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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    let maxDepth = 0;
    let res = null;
    const dfs = (node, depth) => {
        if (!node) {
            maxDepth = Math.max(maxDepth, depth);
            return depth;
        }

        const leftDepth = dfs(node.left, depth + 1);
        const rightDepth = dfs(node.right, depth + 1);
        if (maxDepth === leftDepth && maxDepth === rightDepth) {
            res = node;
        }

        return Math.max(leftDepth, rightDepth);
    };

    dfs(root, 0);

    return res;
};
