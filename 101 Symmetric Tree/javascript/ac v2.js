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
 * @Runtime 40 ms, faster than 99.96% of JavaScript online submissions for Symmetric Tree.
 * @Memory_Usage 35.8 MB, less than 17.04% of JavaScript online submissions for Symmetric Tree.
 */
var isSymmetric = function(root) {
    function isMirror (nl, nr) {
        if (nl === null & nr === null) {
            return true;
        }
        if (nl === null || nr === null) {
            return false;
        }
        
        return nl.val === nr.val && isMirror(nl.left, nr.right) && isMirror(nl.right, nr.left);
    }
    
    if (!root) {
        return true;
    }
    return isMirror(root.left, root.right);
};
