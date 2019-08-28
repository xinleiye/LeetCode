/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let res = null;

    function preOrder (node) {
        if (!node || res) {
            return;
        }
        if (node.val === val) {
            res = node;
            return;
        } else if (node.val > val) {
            preOrder(node.left);
        } else {
            preOrder(node.right);
        }
    }

    preOrder(root);

    return res;
};
