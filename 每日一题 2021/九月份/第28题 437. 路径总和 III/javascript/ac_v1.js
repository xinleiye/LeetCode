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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let res = 0;

    if (!root) {
        return 0;
    }

    res = nodeSum(root, targetSum);
    res += pathSum(root.left, targetSum);
    res += pathSum(root.right, targetSum);

    return res;
};

function nodeSum(node, targetSum) {
    let res = 0;

    if (!node) {
        return 0;
    }

    const val = node.val;

    if (val === targetSum) {
        res++;
    }
    res += nodeSum(node.left, targetSum - val);
    res += nodeSum(node.right, targetSum - val);

    return res;
}
