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
var rightSideView = function(root) {
    let res = [];
    let nodes = [];

    if (!root) {
        return [];
    } else {
        nodes.push(root);
    }

    while (nodes.length) {
        let nextNodes = [];

        res.push(nodes[nodes.length - 1].val);
        for (let i = 0, len = nodes.length; i < len; i++) {
            if (nodes[i].left) {
                nextNodes.push(nodes[i].left);
            }
            if (nodes[i].right) {
                nextNodes.push(nodes[i].right);
            }
        }

        nodes = nextNodes;
    }

    return res;
};
