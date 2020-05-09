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
