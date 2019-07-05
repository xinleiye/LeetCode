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
 * @Runtime 52 ms, faster than 93.16% of JavaScript online submissions for Sum of Left Leaves.
 * @Memory_Usage 34.3 MB, less than 50.87% of JavaScript online submissions for Sum of Left Leaves.
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