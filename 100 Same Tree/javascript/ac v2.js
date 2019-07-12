/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * @Runtime 52 ms, faster than 81.83% of JavaScript online submissions for Same Tree.
 * @Memory_Usage 34 MB, less than 18.68% of JavaScript online submissions for Same Tree.
 */
var isSameTree = function(p, q) {
    if (p !== null && q !== null) {
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    
    return p === null && q === null;
};
