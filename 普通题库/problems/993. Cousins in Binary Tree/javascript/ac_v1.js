/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xInfo = {
        parent: null,
        depth: 0
    };
    let yInfo = {
        parent: null,
        depth: 0
    }
    let findNodes = function (node, parent, depth) {
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
