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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    let stack = [root];

    root.val = 0;
    while (stack.length) {
        const newStack = [];
        let nextLaySum = 0;

        for (const n of stack) {
            if (n.left) {
                nextLaySum += n.left.val;
                newStack.push(n.left);
            }
            if (n.right) {
                nextLaySum += n.right.val;
                newStack.push(n.right);
            }
        }
        for (const n of stack) {
            const leftVal = n.left ? n.left.val : 0;
            const rightVal = n.right ? n.right.val : 0;

            if (n.left) {
                n.left.val = nextLaySum - leftVal - rightVal;
            }
            if (n.right) {
                n.right.val = nextLaySum - rightVal - leftVal;
            }
        }
        stack = newStack;
    }

    return root;
};
