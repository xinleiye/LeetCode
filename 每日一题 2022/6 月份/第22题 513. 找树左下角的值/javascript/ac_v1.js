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
var findBottomLeftValue = function(root) {
    let res = 0;
    let stack = [];

    stack.push(root);
    while (stack.length) {
        let newStack = [];
        const length = stack.length;

        res = stack[0].val;
        for (let i = 0; i < length; i++) {
            const node = stack[i];

            if (node.left) {
                newStack.push(node.left);
            }
            if (node.right) {
                newStack.push(node.right);
            }
        }
        stack = newStack;
    }

    return res;
};
