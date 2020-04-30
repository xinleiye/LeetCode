/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * @Runtime 52 ms, faster than 94.32% of JavaScript online submissions for Binary Tree Level Order Traversal.
 * @Memory_Usage 34.9 MB, less than 44.86% of JavaScript online submissions for Binary Tree Level Order Traversal.
 */
var levelOrder = function(root) {
    let res = [];
    let nodes = [];

    if (!root) {
        return [];
    }

    nodes.push(root);
    while (nodes.length) {
        let nodesVal = [];
        let nodesBuffer = [];

        for (let i = 0, len = nodes.length; i < len; i++) {
            let node = nodes[i];

            nodesVal.push(node.val);
            if (node.left) {
                nodesBuffer.push(node.left);
            }
            if (node.right) {
                nodesBuffer.push(node.right);
            }
        }
        nodes = nodesBuffer;
        res.push(nodesVal);
    }

    return res;
};
