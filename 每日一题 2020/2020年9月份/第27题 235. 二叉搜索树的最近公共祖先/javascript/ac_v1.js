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
    let node = root;
    let pVal = p.val;
    let qVal = q.val;

    while (node) {
        if (node.val > pVal && node.val > qVal) {
            node = node.left;
        } else if (node.val < pVal && node.val < qVal) {
            node = node.right;
        } else {
            return node;
        }
    }

    return null;
};
