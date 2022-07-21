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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    const postOrder = (node) => {
        if (!node) {
            return null;
        }

        node.left = postOrder(node.left);
        node.right = postOrder(node.right);

        return (node.val === 0 && !node.left && !node.right) ? null : node;
    };

    return postOrder(root);
};
