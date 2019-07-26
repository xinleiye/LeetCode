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
 * @Runtime 72 ms, faster than 92.15% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
 * @Memory_Usage 43.7 MB, less than 43.80% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
 */
var lowestCommonAncestor = function(root, p, q) {
    let node;
    let parentVal;
    let pVal = p.val;
    let qVal = q.val;
    
    node = root;
    while (node) {
        parentVal = node.val;
        if (pVal > parentVal && qVal > parentVal) {
            node = node.right;
        } else if (pVal < parentVal && qVal < parentVal) {
            node = node.left;
        } else {
            return node;
        }
    }
    return null
};
