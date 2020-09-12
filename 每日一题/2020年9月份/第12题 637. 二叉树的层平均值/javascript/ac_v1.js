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
var averageOfLevels = function(root) {
    let res = [];
    let nodes = [];

    if (!root) {
        return null;
    } else {
        nodes.push(root);
    }
    while (nodes.length) {
        let sum = 0;
        let len = nodes.length;
        let childrens = [];

        for (let i = 0; i < len; i++) {
            let node = nodes[i];
            sum += node.val;
            if (node.left) {
                childrens.push(node.left);
            }
            if (node.right) {
                childrens.push(node.right);
            }
        }
        res.push(sum / len);
        nodes = childrens;
    }
    return res;
};
