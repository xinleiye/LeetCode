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
 * @Runtime 56 ms, faster than 83.95% of JavaScript online submissions for Binary Tree Paths.
 * @Memory_Usage 34.3 MB, less than 95.06% of JavaScript online submissions for Binary Tree Paths.
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
