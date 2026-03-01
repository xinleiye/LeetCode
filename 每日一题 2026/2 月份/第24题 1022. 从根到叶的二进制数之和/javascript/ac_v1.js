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
var sumRootToLeaf = function(root) {
    const preOrder = (node, num) => {
        if (!node) {
            return 0;
        }
        num = (num << 1) | node.val;
        if (!node.left && !node.right) {
            return num;
        }

        return preOrder(node.left, num) + preOrder(node.right, num);
    };

    return preOrder(root, 0);
};
