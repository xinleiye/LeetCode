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
var sumRootToLeaf = function(root) {
    let res = 0;
    let getSum = function (node, sum) {
        if (!node.left && !node.right) {
            res += sum << 1 | node.val;
            return;
        }
        if (node.left) {
            getSum(node.left, sum << 1 | node.val);
        }
        if (node.right) {
            getSum(node.right, sum << 1 | node.val);
        }
    }

    getSum(root, 0);

    return res;
};
