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
var findMode = function(root) {
    let max = 0;
    let nodeMap = new Map();
    let res = [];

    function preOrder (root) {
        if (!root) {
            return;
        }
        if (nodeMap.has(root.val)) {
            nodeMap.set(root.val, nodeMap.get(root.val) + 1);
        } else {
            nodeMap.set(root.val, 1);
        }
        preOrder(root.left);
        preOrder(root.right);
    }

    preOrder(root);

    for (let [key, val] of nodeMap) {
        if (val > max) {
            max = val;
            res = [key];
        } else if (val === max) {
            res.push(key);
        }
    }
    return res;
};
