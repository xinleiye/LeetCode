/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = root;

    while (res) {
        if (res.val > p.val && res.val > q.val) {
            res = res.left;
        } else if (res.val < p.val && res.val < q.val) {
            res = res.right;
        } else {
            return res;
        }
    }

    return null;
};
