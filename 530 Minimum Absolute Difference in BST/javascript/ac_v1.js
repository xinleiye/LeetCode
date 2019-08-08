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
 * @Runtime 88 ms, faster than 25.21% of JavaScript online submissions for Minimum Absolute Difference in BST.
 * @Memory_Usage 38 MB, less than 100.00% of JavaScript online submissions for Minimum Absolute Difference in BST.
 */
var getMinimumDifference = function(root) {
    let res = 0;
    let sortedVal = [];
    
    function inOrder (root) {
        if (!root) {
            return;
        }
        inOrder(root.left);
        sortedVal.push(root.val);
        inOrder(root.right);
    }
    
    inOrder(root);
    res = sortedVal[sortedVal.length - 1];
    for (let i = 1, len = sortedVal.length; i < len; i++) {
        res = Math.min(sortedVal[i] - sortedVal[i -1], res);
    }
    return res;
};
