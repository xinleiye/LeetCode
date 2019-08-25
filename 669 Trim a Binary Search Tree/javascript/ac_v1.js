/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 * @Runtime 76 ms, faster than 25.36% of JavaScript online submissions for Trim a Binary Search Tree.
 * @Memory_Usage 39.5 MB, less than 100.00% of JavaScript online submissions for Trim a Binary Search Tree.
 */
var trimBST = function(root, L, R) {
    let sorted = [];
    let res = null;

    function inOrder (node) {
        if (!node) {
            return;
        }
        if (node.val >= L && node.val <= R) {
            sorted.push(node.val);
        }
        inOrder(node.left);
        inOrder(node.right);
    }
    function insertVal (root, val) {
        if (root.val > val) {
            if (root.left) {
                insertVal(root.left, val);
            } else {
                root.left = new TreeNode(val);
            }
        } else {
            if (root.right) {
                insertVal(root.right, val);
            } else {
                root.right = new TreeNode(val);
            }
        }
    }
    inOrder(root);
    if (sorted.length) {
        res = new TreeNode(sorted[0]);
    }
    for (let i = 1, len = sorted.length; i < len; i++) {
        insertVal(res, sorted[i]);
    }

    return res;
};
