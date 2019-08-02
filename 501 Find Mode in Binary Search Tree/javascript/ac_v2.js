/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * @Runtime 60 ms, faster than 97.38% of JavaScript online submissions for Find Mode in Binary Search Tree.
 * @Memory_Usage 40.6 MB, less than 83.33% of JavaScript online submissions for Find Mode in Binary Search Tree.
 */
var findMode = function(root) {
    let curVal;
    let max = 0;
    let cur = 0;
    let mode = 0;
    let res = [];

    function inOrder (root) {
        if (!root) {
            return;
        }
        inOrder(root.left);
        if (root.val !== curVal) {
            cur = 0;
            curVal = root.val;
        }
        cur++;
        if (cur > max) {
            max = cur;
            mode = 1;
        } else if (cur === max) {
            res[mode] = curVal;
            mode++;
        }
        inOrder(root.right);
    }

    inOrder(root);
    res = new Array(mode);
    cur = 0;
    mode = 0;
    inOrder(root);

    return res;
};
