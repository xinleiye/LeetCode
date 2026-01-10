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
var maxProduct = function(root) {
    calcSum(root);

    let minDiff = root.val;
    let stack = [root];
    let res = 0;
    const MOD = 1e9 + 7;
    const SUM = root.val;
    while (stack.length) {
        const node = stack.shift();
        if (node.left) {
            const sumL = node.left.val;
            const sumR = SUM - sumL;
            const diff = Math.abs(sumR - sumL);
            if (diff < minDiff) {
                minDiff = diff;
                res = (sumL * sumR) % MOD;
            }
            stack.push(node.left);
        }
        if (node.right) {
            const sumR = node.right.val;
            const sumL = SUM - sumR;
            const diff = Math.abs(sumR - sumL);
            if (diff < minDiff) {
                minDiff = diff;
                res = (sumL * sumR) % MOD;
            }
            stack.push(node.right);
        }
    }

    return res;
};

function calcSum(node) {
    if (!node) {
        return 0;
    }
    node.val += calcSum(node.left) + calcSum(node.right);

    return node.val;
}
