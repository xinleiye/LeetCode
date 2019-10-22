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
var isUnivalTree = function(root) {
    let checkTree = function (node, val) {
        if (!node) {
            return true;
        }
        if (node.val !== val) {
            return false;
        }
        return checkTree(node.left, val) && checkTree(node.right,val);
    }
    
    return checkTree(root, root.val);
};
