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
    let res = 1;
    let level = 1;
    let maxSum = root.val;
    let stack = [root];

    while (stack.length) {
        let sum = 0;
        const newStack = [];

        for (const s of stack) {
            sum += s.val;
            if (s.left) {
                newStack.push(s.left);
            }
            if (s.right) {
                newStack.push(s.right);
            }
        }
        if (sum > maxSum) {
            res = level;
            maxSum = sum;
        }
        level++;
        stack = newStack;
    }

    return res;
};
