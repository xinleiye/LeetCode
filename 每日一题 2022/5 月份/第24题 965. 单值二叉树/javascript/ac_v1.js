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
var isUnivalTree = function(root) {
    let res = true;
    const rootVal = root.val;
    const preOrder = (node) => {
        if (!node || !res) {
            return;
        }
        if (node.val !== rootVal) {
            res = false;
            return;
        }
        preOrder(node.left);
        preOrder(node.right);
    };

    preOrder(root);

    return res;
};
