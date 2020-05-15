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
 */
var minDiffInBST = function(root) {
    let res = Infinity;
    let sorted = [];
    let inOrder = function (node) {
        if (!node) {
            return;
        }
        inOrder(node.left);
        sorted.push(node.val);
        inOrder(node.right);
    };

    if (!root || (!root.left && !root.right)) {
        return;
    }
    inOrder(root);
    for (let i = 1, len = sorted.length; i < len; i++) {
        res = Math.min(res, sorted[i] - sorted[i-1]);
    }

    return res;
};
