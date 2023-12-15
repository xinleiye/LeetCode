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
var reverseOddLevels = function(root) {
    let stack = [];
    let layer = 0;
    const swapNodeVal = (arr) => {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            const tmp = arr[left].val;

            arr[left].val = arr[right].val;
            arr[right].val = tmp;
            left++;
            right--;
        }
    };

    stack.push(root);
    while (stack.length) {
        const newStack = [];

        for (let node of stack) {
            if (node.left) {
                newStack.push(node.left);
                newStack.push(node.right);
            } else {
                break;
            }
        }
        layer++;
        if (layer % 2) {
            swapNodeVal(newStack);
        }
        stack = newStack;
    }
    
    return root;
};
