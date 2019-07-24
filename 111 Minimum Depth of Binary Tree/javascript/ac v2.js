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
 * @Runtime 56 ms, faster than 94.03% of JavaScript online submissions for Minimum Depth of Binary Tree.
 * @Memory_Usage 37.5 MB, less than 21.99% of JavaScript online submissions for Minimum Depth of Binary Tree.
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }

    if (!root.left && !root.right) {
        return 1;
    }
    
    if (root.left && root.right) {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
    
    if (root.left && !root.right) {
        return minDepth(root.left) + 1;
    }
    
    if (!root.left && root.right) {
        return minDepth(root.right) + 1;
    }
};
