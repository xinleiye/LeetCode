/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    function isLeaf (node) {
        if (node.left === null && node.right === null) {
            return true;
        } else {
            return false;
        }
    }
    function getVal (root, val) {
        let res;

        if (root.val === val) {
            if (isLeaf(root)) {
                return true;
            }
        }
        if (root.left) {
            res = getVal(root.left, val - root.val);
        }
        if (res) {
            return true;
        }
        if (root.right) {
            res = getVal(root.right, val - root.val);
        }
        if (res) {
            return true;
        }

        return false;
    }
    
    if (!root) {
        return false;
    }
    
    return getVal(root, sum);
};
