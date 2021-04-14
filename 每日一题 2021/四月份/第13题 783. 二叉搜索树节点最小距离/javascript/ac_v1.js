/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDiffInBST = function(root) {
    let res = 1e5;
    let preVal = -1e5;
    let inOrder = (node) => {
        if (!node) {
            return;
        }
        inOrder(node.left);
        res = Math.min(res, node.val - preVal);
        preVal = node.val;
        inOrder(node.right);
    };

    inOrder(root);

    return res;
};
