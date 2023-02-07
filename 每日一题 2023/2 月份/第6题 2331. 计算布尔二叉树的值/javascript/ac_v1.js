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
var evaluateTree = function(root) {
    const postOrder = (node) => {
        if (!node.left && !node.right) {
            return node.val === 1;
        }
        if (node.val === 2) {
            return postOrder(node.left) || postOrder(node.right);
        } else {
            return postOrder(node.left) && postOrder(node.right);
        }
    };

    return postOrder(root);
};
