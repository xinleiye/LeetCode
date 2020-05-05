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
    let checkBST = (node, small, big) => {
        if (!node) {
            return true;
        }
        if (node.val <= small || node.val >= big) {
            return false;
        }

        return checkBST(node.left, small, node.val) && checkBST(node.right, node.val, big);
    };

    return checkBST(root, -Infinity, Infinity);
};
