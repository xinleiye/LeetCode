/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = [];
    let numStack = [];
    let dfs = (node, preSum) => {
        let currentSum;

        if (!node) {
            return;
        }
        numStack.push(node.val);
        currentSum = preSum + node.val;
        if (currentSum === sum) {
            if (!node.left && !node.right) {
                res.push(numStack.slice());
            }
        }
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
        numStack.pop();
    };

    dfs(root, 0);

    return res;
};
