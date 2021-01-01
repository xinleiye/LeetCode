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
var zigzagLevelOrder = function(root) {
    const res = [];
    let nodes = [];
    // 1：从左往右；2：从右往左
    let dir = 1;

    if (!root) {
        return res;
    } else {
        nodes.push(root)
    }
    while (nodes.length) {
        let newNodes = [];
        let nodesVal = [];

        for (const node of nodes) {
            if (dir === 1) {
                // 当前层为从左向右
                nodesVal.push(node.val);
            } else {
                // 当前层为从右向左
                nodesVal.unshift(node.val);
            }
            if (node.left) {
                newNodes.push(node.left);
            }
            if (node.right) {
                newNodes.push(node.right);
            }
        }
        res.push(nodesVal);
        nodes = newNodes;
        if (dir === 1) {
            dir = 2;
        } else {
            dir = 1;
        }
    }

    return res;
};
