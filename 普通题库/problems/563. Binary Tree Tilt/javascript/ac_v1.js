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
var findTilt = function(root) {
    let res = 0;

    function postOrder (node) {
        let lSum;
        let rSum;

        if (!node) {
            return 0;
        }

        lSum = postOrder(node.left);
        rSum = postOrder(node.right);
        res += Math.abs(lSum - rSum);

        return lSum + rSum + node.val;
    }

    postOrder(root);

    return res;
};
