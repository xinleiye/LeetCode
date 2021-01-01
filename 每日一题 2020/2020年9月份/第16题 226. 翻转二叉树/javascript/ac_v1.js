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
var invertTree = function(root) {
    let node;

    if (!root) {
        return null;
    }

    node = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(node);

    return root;
};
