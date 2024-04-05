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
var maxAncestorDiff = function(root) {
    return dfsSearch(root, root.val, root.val);
};

function dfsSearch(node, max, min) {
    let res = 0;

    if (!node) {
        return res;
    }
    res = Math.max(res, Math.abs(node.val - max), Math.abs(node.val - min));
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    res = Math.max(res, dfsSearch(node.left, max, min));
    res = Math.max(res, dfsSearch(node.right, max, min));

    return res;
}
