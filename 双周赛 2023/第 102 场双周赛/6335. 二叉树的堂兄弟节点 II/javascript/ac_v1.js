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
    const laySum = [];
    const stack = [root];
    while (stack.length) {
        const length = stack.length;
        let sum = 0;
        let index = 0;
        while (index < length) {
            const curNode = stack.shift();
            sum += curNode.val;
            if (curNode.left) {
                stack.push(curNode.left);
            }
            if (curNode.right) {
                stack.push(curNode.right);
            }
            index++;
        }
        laySum.push(sum);
    }

    const dfsSearch = (node, siblingVal, deep, laySum) => {
        if (!node) {
            return;
        }
        const leftVal = node.left ? node.left.val : 0;
        const rightVal = node.right ? node.right.val : 0;
        node.val = laySum[deep] - node.val - siblingVal;
        dfsSearch(node.left, rightVal, deep + 1, laySum);
        dfsSearch(node.right, leftVal, deep + 1, laySum);
    };
    dfsSearch(root, 0, 0, laySum);

    return root;
};
