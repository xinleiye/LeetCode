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
    let left;
    let right;

    if (!root) {
        return null;
    }
    if (root.val === p.val || root.val === q.val) {
        return root;
    }
    left = lowestCommonAncestor(root.left, p, q);
    right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root;
    } else if (left) {
        return left;
    } else if (right) {
        return right;
    }

    return null;
};
