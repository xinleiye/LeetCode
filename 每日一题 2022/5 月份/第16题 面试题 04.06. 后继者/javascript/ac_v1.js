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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let res = null;

    if (p.right) {
        res = p.right;
        while (res.left) {
            res = res.left;
        }
        return res;
    }

    let node = root;
    while (node) {
        if (node.val > p.val) {
            res = node;
            node = node.left;
        } else {
            node = node.right;
        }
    }

    return res;
};
