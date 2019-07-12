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
 * @Memory_Usage 33.8 MB, less than 47.92% of JavaScript online submissions for Same Tree.
 */
var isSameTree = function(p, q) {
    let res = true;

    function dfs (nodep, nodeq) {
        if (nodep && nodeq) {
            if (nodep.val === nodeq.val) {
                dfs(nodep.left, nodeq.left);
                dfs(nodep.right, nodeq.right);
            } else {
                res = false;
            }
        } else if (!nodep && !nodeq) {
            
        } else {
            res = false;
        }
    }

    dfs(p, q);

    return res;
};
