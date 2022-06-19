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
var findFrequentTreeSum = function(root) {
    const sumMap = new Map();
    const dfs = (node) => {
        if (!node) {
            return 0;
        }

        const sum = dfs(node.left) + dfs(node.right) + node.val;
        if (sumMap.has(sum)) {
            sumMap.set(sum, sumMap.get(sum) + 1);
        } else {
            sumMap.set(sum, 1);
        }

        return sum;
    };
    dfs(root);

    let maxCount = 0;
    sumMap.forEach(count => {
        maxCount = Math.max(maxCount, count);
    });

    const res = [];
    sumMap.forEach((count, sum) => {
        if (count === maxCount) {
            res.push(sum);
        }
    });

    return res;
};
