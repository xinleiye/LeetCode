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
 * @return {number[]}
 */
var largestValues = function(root) {
    const res = [];
    let stack = [];

    if (root) {
        stack.push(root);
    }
    while (stack.length) {
        let max = Number.MIN_SAFE_INTEGER;
        const total = stack.length;
        const newStack = [];

        for (let i = 0; i < total; i++) {
            const node = stack[i];

            max = Math.max(node.val, max);
            if (node.left) {
                newStack.push(node.left);
            }
            if (node.right) {
                newStack.push(node.right);
            }
        }
        res.push(max);
        stack = newStack;
    }

    return res;
};
