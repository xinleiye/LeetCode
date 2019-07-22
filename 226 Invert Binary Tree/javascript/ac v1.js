/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * @Runtime 48 ms, faster than 93.90% of JavaScript online submissions for Invert Binary Tree.
 * @Memory_Usage 33.8 MB, less than 73.61% of JavaScript online submissions for Invert Binary Tree.
 */
var invertTree = function(root) {
    let tmp;

    if (!root) {
        return root;
    }
    
    invertTree(root.left);
    invertTree(root.right);
    
    tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    
    return root;
};
