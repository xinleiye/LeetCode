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
 * @Runtime 56 ms, faster than 94.65% of JavaScript online submissions for Maximum Depth of Binary Tree.
 * @Memory_Usage 37.1 MB, less than 28.32% of JavaScript online submissions for Maximum Depth of Binary Tree.
 */
var maxDepth = function(root) {
    let ldepth = 0;
    let rdepth = 0;

    if (!root) {
        return 0;
    } else {
        ldepth = maxDepth(root.left);
        rdepth = maxDepth(root.right);
        
        return ldepth > rdepth ? ldepth + 1 : rdepth + 1;
    }
};
