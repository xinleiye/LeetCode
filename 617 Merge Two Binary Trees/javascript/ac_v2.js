/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 * @Runtime 104 ms, faster than 17.82% of JavaScript online submissions for Merge Two Binary Trees.
 * @Memory_Usage 40 MB, less than 100.00% of JavaScript online submissions for Merge Two Binary Trees.
 */
var mergeTrees = function(t1, t2) {
    if (!t1) {
        return t2;
    } else if (!t2) {
        return t1;
    }
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);

    return t1;
};
