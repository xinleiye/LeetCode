/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if (n % 2 === 0) {
        return [];
    }
    if (n === 1) {
        return [new TreeNode(0)];
    }

    const res = [];
    for (let i = 1; i < n; i += 2) {
        const leftTree = allPossibleFBT(i);
        const rightTree = allPossibleFBT(n - i - 1);

        for (const left of leftTree) {
            for (const right of rightTree) {
                res.push(new TreeNode(0, left, right));
            }
        }
    }

    return res;
};
