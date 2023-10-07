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
var rob = function(root) {
    const dfsSearch = (node) => {
        if (!node) {
            return [0, 0];
        }

        const l = dfsSearch(node.left);
        const r = dfsSearch(node.right);
        const selected = node.val + l[1] + r[1];
        const notSelected = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);

        return [selected, notSelected];
    };

    const val = dfsSearch(root);

    return Math.max(val[0], val[1]);
};
