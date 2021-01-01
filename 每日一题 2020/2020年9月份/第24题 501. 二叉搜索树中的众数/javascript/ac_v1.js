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
    let maxNum = 0;
    let nodeValMap = new Map();
    let res = [];
    let preOrder = (node) => {
        if (!node) {
            return;
        }
        if (nodeValMap.has(node.val)) {
            let num = nodeValMap.get(node.val) + 1;

            nodeValMap.set(node.val, num);
            maxNum = Math.max(maxNum, num);
        } else {
            nodeValMap.set(node.val, 1);
            maxNum = Math.max(maxNum, 1);
        }
        preOrder(node.left);
        preOrder(node.right);
    };

    preOrder(root);
    nodeValMap.forEach((val, key) => {
        if (val === maxNum) {
            res.push(key);
        }
    });

    return res;
};
