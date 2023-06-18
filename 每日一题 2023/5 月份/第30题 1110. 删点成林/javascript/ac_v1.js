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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const deleteSet = new Set(to_delete);
    const res = [];

    dfsDelete(root, true, deleteSet, res);

    return res;
};

function dfsDelete(node, isRoot, deleteSet, trees) {
    if (!node) {
        return null;
    }
    
    const needDelete = deleteSet.has(node.val);
    node.left = dfsDelete(node.left, needDelete, deleteSet, trees);
    node.right = dfsDelete(node.right, needDelete, deleteSet, trees);
    if (needDelete) {
        return null;
    } else {
        if (isRoot) {
            trees.push(node);
        }
        return node;
    }
}
