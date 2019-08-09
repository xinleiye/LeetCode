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
 * @Runtime 76 ms, faster than 96.95% of JavaScript online submissions for Convert BST to Greater Tree.
 * @Memory_Usage 40.1 MB, less than 75.00% of JavaScript online submissions for Convert BST to Greater Tree.
 */
var convertBST = function(root) {
    let sum = 0;

    function inOrder (root) {
        if (!root) {
            return;
        }
        inOrder(root.right);
        root.val += sum;
        sum = root.val;
        inOrder(root.left);
    }
    inOrder(root);
    return root;
};
