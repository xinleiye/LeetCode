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
