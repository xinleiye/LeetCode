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
var deepestLeavesSum = function(root) {
    let res = 0;
    let nodes = [];

    if (!root) {
        return res;
    }

    nodes.push(root);
    while (nodes.length > 0) {
        let node = [];

        res = 0;
        for (let item of nodes) {
            res += item.val;
            if (item.left) {
                node.push(item.left);
            }
            if (item.right) {
                node.push(item.right);
            }
        }
        nodes = node;
    }

    return res;
};
