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
var findSecondMinimumValue = function(root) {
    let first = root.val;
    let second = Infinity;

    function preOrder (node) {
        if (!node) {
            return;
        }
        if (node.val <= second && node.val !== first) {
            second = node.val;
        }
        preOrder(node.left);
        preOrder(node.right);
    }

    preOrder(root);

    return second === Infinity ? -1 : second;
};
