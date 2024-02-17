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
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    const res = [];
    let stack = [];
    let dir = 1;
    stack.push(root);
    while(stack.length) {
        const newStack = [];
        const vals = [];
        while (stack.length) {
            const node = stack.shift();
            if (dir === -1) {
                vals.unshift(node.val);
            } else {
                vals.push(node.val);
            }
            if (node.left) {
                newStack.push(node.left);
            }
            if (node.right) {
                newStack.push(node.right);
            }
        }
        res.push(vals);
        stack = newStack;
        dir = -1 * dir;
    }

    return res;
};
