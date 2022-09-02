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
var longestUnivaluePath = function(root) {
    let res = 0;
    let getHeightVal = function (node, preVal) {
        let lLen = 0;
        let rLen = 0;

        if (!node) {
            return 0;
        }

        lLen = getHeightVal(node.left, node.val);
        rLen = getHeightVal(node.right, node.val);
        res = Math.max(res, lLen + rLen);

        if (node.val === preVal) {
            return lLen > rLen ? lLen + 1 : rLen + 1;
        } else {
            return 0;
        }
    }

    if (!root) {
        return res;
    }
    getHeightVal(root, root.val);

    return res;
};
