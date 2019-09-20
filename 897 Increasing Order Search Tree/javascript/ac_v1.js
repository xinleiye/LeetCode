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
var increasingBST = function(root) {
    let node;
    let res = null;
    let sorted = [];

    function inOrder (node) {
        if (!node) {
            return;
        }
        inOrder(node.left);
        sorted.push(node.val);
        inOrder(node.right);
    };
    
    if (!root) {
        return res;
    } else {
        inOrder(root);
    }

    res = new TreeNode(sorted[0]);
    node = res;
    for (let i = 1, len = sorted.length; i < len; i++) {
        node.right = new TreeNode(sorted[i]);
        node = node.right;
    }
    return res;
};
