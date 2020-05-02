/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let res = 0;
    
    var calcuateLeftLeaf = function (node) {
        if (!node) {
            return;
        }
        if (node.left) {
            if (!node.left.left && !node.left.right) {
                res += node.left.val;
            } else {
                calcuateLeftLeaf(node.left);
            }
        }
        calcuateLeftLeaf(node.right)
    }
    
    calcuateLeftLeaf(root);

    return res;
};