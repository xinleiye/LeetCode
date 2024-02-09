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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const xInfo = {
        parent: null,
        depth: 0
    };
    const yInfo = {
        parent: null,
        depth: 0
    }
    const findNodes = function (node, parent, depth) {
        if (node) {
            if (node.val === x) {
                xInfo.parent = parent;
                xInfo.depth = depth;
            }
            if (node.val === y) {
                yInfo.parent = parent;
                yInfo.depth = depth;
            }
            findNodes(node.left, node, depth + 1);
            findNodes(node.right, node, depth + 1);
        }
    };

    findNodes(root, null, 0);

    return (xInfo.parent !== null) && (yInfo.parent !== null) && (xInfo.parent !== yInfo.parent) && (xInfo.depth === yInfo.depth);
};
