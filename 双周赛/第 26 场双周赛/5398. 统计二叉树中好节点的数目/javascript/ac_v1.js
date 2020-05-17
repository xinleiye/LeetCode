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
var goodNodes = function(root) {
    let res = 0;
    let preOrder = (node, maxVal) => {
        if (!node) {
            return;
        }
        if (node.val >= maxVal) {
            res++;
        }
        preOrder(node.left, Math.max(node.val, maxVal));
        preOrder(node.right, Math.max(node.val, maxVal));
    };
    
    preOrder(root, root.val);
    
    return res;
};
