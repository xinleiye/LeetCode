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
var postorderTraversal = function(root) {
    let res = [];
    let preNode = null;
    let node = root;
    let nodes = [];

    while (node || nodes.length) {
        while (node) {
            nodes.push(node);
            node = node.left;
        }
        node = nodes.pop();
        if (!node.right || node.right === preNode) {
            res.push(node.val);
            preNode = node;
            node = null;
        } else {
            nodes.push(node);
            node = node.right;
        }
    }

    return res;
};
