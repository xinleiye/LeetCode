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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    const layerSum = [];
    let stack = [root];

    while (stack.length) {
        const newStack = [];
        let sum = 0;

        for (const node of stack) {
            sum += node.val;
            if (node.left) {
                newStack.push(node.left);
            }
            if (node.right) {
                newStack.push(node.right)
            }
        }
        layerSum.push(sum);
        stack = newStack;
    }
    if (layerSum.length < k) {
        return -1;
    }
    layerSum.sort((n1, n2) => n2 - n1);

    return layerSum[k - 1];
};
