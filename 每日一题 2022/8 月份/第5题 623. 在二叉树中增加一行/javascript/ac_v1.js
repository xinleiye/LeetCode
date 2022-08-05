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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        return new TreeNode(val, root);
    }

    const dfsSearch = (node, curDepth) => {
        if (!node) {
            return;
        }
        if (curDepth + 1 === depth) {
            node.left = new TreeNode(val, node.left);
            node.right = new TreeNode(val, null, node.right);

            return;
        }
        dfsSearch(node.left, curDepth + 1);
        dfsSearch(node.right, curDepth + 1);
    };

    dfsSearch(root, 1);

    return root;
};
