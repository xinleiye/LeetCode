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
    return treeHeight(root) >= 0;
};

function treeHeight (node) {
    let leftHeight;
    let rightHeight;

    if (!node) {
        return 0;
    }
    leftHeight = treeHeight(node.left);
    if (leftHeight === -1) {
        return -1;
    }
    rightHeight = treeHeight(node.right);
    if (rightHeight === -1) {
        return -1;
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
};
