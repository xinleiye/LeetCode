/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * @Runtime 80 ms, faster than 64.74% of JavaScript online submissions for Subtree of Another Tree.
 * @Memory_Usage 38.9 MB, less than 100.00% of JavaScript online submissions for Subtree of Another Tree.
 */
var isSubtree = function(s, t) {
    let res = false;

    function preOrder (sNode) {
        if (!sNode || res) {
            return;
        }
        res = isSameTree(sNode, t);
        if (res) {
            return;
        }
        preOrder(sNode.left, t);
        preOrder(sNode.right, t);
    }

    preOrder(s, t);

    return res;
};

function isSameTree (t1, t2) {
    if (t1 !== null && t2 !== null) {
        return t1.val === t2.val && isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
    }
    return  t1 === null && t2 === null;
}
