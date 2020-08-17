/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    if (Math.abs(treeHeight(root.left) - treeHeight(root.right)) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right);
};

function treeHeight (node) {
    if (!node) {
        return 0;
    }
    return Math.max(treeHeight(node.left), treeHeight(node.right)) + 1;
};
