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
    let res = 0;
    const dfsSearch = (node, max, min) => {
        if (!node) {
            return;
        }
        res = Math.max(res, Math.abs(node.val - max));
        res = Math.max(res, Math.abs(node.val - min));
        max = Math.max(max, node.val);
        min = Math.min(min, node.val)
        dfsSearch(node.left, max, min);
        dfsSearch(node.right, max, min);
    };

    dfsSearch(root, root.val, root.val);

    return res;
};
