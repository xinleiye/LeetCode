/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    let node = root;
    let nodes = [];

    while (nodes.length || node) {
        while (node) {
            nodes.push(node);
            node = node.left;
        }
        node = nodes.pop();
        res.push(node.val);
        node = node.right;
    }

    return res;
};
