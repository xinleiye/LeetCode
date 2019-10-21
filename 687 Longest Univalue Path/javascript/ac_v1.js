/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    let res = 0;
    let nodes = [];
    let getHeightVal = function (node, val) {
        let lLen = 0;
        let rLen = 0;

        if (!node || node.val !== val) {
            return 0;
        }
        if (node.val === val) {
            lLen = getHeightVal(node.left, val);
            rLen = getHeightVal(node.right, val);
        }

        return lLen > rLen ? lLen + 1 : rLen + 1;
    }

    if (!root) {
        return res;
    }
    nodes.push(root);
    while (nodes.length) {
        let node = nodes.shift();
        res = Math.max(res, getHeightVal(node.left, node.val) + getHeightVal(node.right, node.val));
        if (node.left) {
            nodes.push(node.left);
        }
        if (node.right) {
            nodes.push(node.right);
        }
    }
    return res;
};
