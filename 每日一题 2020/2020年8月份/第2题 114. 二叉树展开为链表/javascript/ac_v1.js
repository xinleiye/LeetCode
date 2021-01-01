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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let left;
    let right;

    if (!root) {
        return null;
    }

    left = flatten(root.left);
    right = flatten(root.right);

    if (left) {
        let node = left;

        while (node.right) {
            node = node.right;
        }
        node.right = right;
        root.left = null;
        root.right = left;
    }

    return root;
};
