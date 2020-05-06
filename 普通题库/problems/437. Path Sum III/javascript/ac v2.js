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
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return 0;
    }
    return getPathSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
function getPathSum (root, sum) {
    let val;
    let res;

    if (!root) {
        return 0;
    }
    val = sum - root.val;
    res = val === 0 ? 1 : 0;

    return res + getPathSum(root.left, val) + getPathSum(root.right, val);
}
