/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let res = 0;
    let layer = 1;
    let stack = [root];
    let maxSum = -Infinity;

    while (stack.length) {
        let sum = 0;
        const nextStack = [];

        for (const node of stack) {
            sum += node.val;
            if (node.left) {
                nextStack.push(node.left);
            }
            if (node.right) {
                nextStack.push(node.right);
            }
        }
        if (sum > maxSum) {
            maxSum = sum;
            res = layer;
        }
        layer++;
        stack = nextStack;
    }

    return res;
};
