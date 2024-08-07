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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    return dfsSearch(root, subRoot);
};

function isSameTree(tree, subTree) {
    if (!tree && !subTree) {
        return true;
    }
    if (!tree || !subTree || tree.val !== subTree.val) {
        return false;
    }

    return isSameTree(tree.left, subTree.left) && isSameTree(tree.right, subTree.right);
}

function dfsSearch(tree, subTree) {
    if (!tree) {
        return false;
    }

    return isSameTree(tree, subTree) || dfsSearch(tree.left, subTree) || dfsSearch(tree.right, subTree);
}
