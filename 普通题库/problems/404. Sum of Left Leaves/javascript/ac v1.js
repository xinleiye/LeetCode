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
var sumOfLeftLeaves = function(root) {
    let res = 0;
    
    function lc (l) {
        if (!l) {
            return;
        }
        if (!l.left && !l.right) {
            res += l.val;
        } else {
            lc(l.left);
            rc(l.right);
        }
    }
    function rc (r) {
        if (!r) {
            return;
        }
        lc(r.left);
        rc(r.right);
    }
    if (!root || (!root.left && !root.right)) {
        return 0;
    }
    
    lc(root.left);
    rc(root.right);

    return res;
};
