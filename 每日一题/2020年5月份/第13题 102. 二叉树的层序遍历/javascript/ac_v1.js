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
