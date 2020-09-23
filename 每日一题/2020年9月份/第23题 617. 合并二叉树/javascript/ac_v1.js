/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    let dfs = (node1, node2) => {
        if (!node1 && !node2) {
            return null;
        }

        if (!node1 && node2) {
            return node2;
        }
        if (node1 && !node2) {
            return node1;
        }
        node1.val += node2.val;
        node1.left = dfs(node1.left, node2.left);
        node1.right = dfs(node1.right, node2.right);

        return node1;
    };

    t1 = dfs(t1, t2);

    return t1;
};
