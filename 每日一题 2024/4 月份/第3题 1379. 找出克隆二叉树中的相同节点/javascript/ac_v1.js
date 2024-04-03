/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    return dfsSearch(cloned, target);
};

function dfsSearch(tree, target) {
    if (!tree) {
        return;
    }
    if (tree.val === target.val) {
        return tree;
    }

    let node = dfsSearch(tree.left, target);
    if (node) {
        return node;
    }

    return dfsSearch(tree.right, target);
}
