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
var isValidBST = function(root) {
    let sorted = [];

    function inOrder (node) {
        if (!node) {
            return;
        }
        inOrder(node.left);
        sorted.push(node.val);
        inOrder(node.right);
    }

    inOrder(root);
    for (let i = 1, len = sorted.length; i < len; i++) {
        if (sorted[i - 1] >= sorted[i]) {
            return false;
        }
    }
    return true;
};
