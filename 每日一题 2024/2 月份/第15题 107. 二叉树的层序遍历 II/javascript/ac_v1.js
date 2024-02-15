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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }

    const res = [];
    let stack = [];
    stack.push(root);
    while (stack.length) {
        const vals = [];
        const newStack = [];
        while (stack.length) {
            const node = stack.shift();
            if (node.left) {
                newStack.push(node.left);
            }
            if (node.right) {
                newStack.push(node.right);
            }
            vals.push(node.val);
        }
        res.unshift(vals);
        stack = newStack;
    }

    return res;
};
