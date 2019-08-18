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
 * @Runtime 72 ms, faster than 62.59% of JavaScript online submissions for Average of Levels in Binary Tree.
 * @Memory_Usage 38.1 MB, less than 100.00% of JavaScript online submissions for Average of Levels in Binary Tree.
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
