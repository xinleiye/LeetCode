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
