/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    let path = "";
    
    function preOrder (root, path) {
        path += root.val;
        if (!root.left && !root.right) {
            res.push(path);
            return;
        }
        path += "->";
        if (root.left) {
            preOrder(root.left, path);
        }
        if (root.right) {
            preOrder(root.right, path);
        }
    }

    if (!root) {
        return [];
    }
    preOrder(root, path);

    return res;
};
