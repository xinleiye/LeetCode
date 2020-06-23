/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let res = -Infinity;
    let getMaxValue = (node) => {
        let leftMax;
        let rightMax;

        if (!node) {
            return 0;
        }

        leftMax = Math.max(getMaxValue(node.left), 0);
        rightMax = Math.max(getMaxValue(node.right), 0);

        res = Math.max(res, node.val + leftMax + rightMax);

        return node.val + Math.max(leftMax, rightMax);
    };

    getMaxValue(root);

    return res;
};
