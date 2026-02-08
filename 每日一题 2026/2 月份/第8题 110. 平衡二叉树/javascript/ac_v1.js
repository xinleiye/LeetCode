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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function postOrder(node) {
        if (!node) {
            return 0;
        }

        const leftHeight = postOrder(node.left);
        if (leftHeight === -1) {
            return -1;
        }
        const rightHeight = postOrder(node.right);
        if (rightHeight === -1 || Math.abs(rightHeight - leftHeight) > 1) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }

    return postOrder(root) >= 0;
};
