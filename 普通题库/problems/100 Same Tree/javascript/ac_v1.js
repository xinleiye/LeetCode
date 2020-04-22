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
 */
var isSameTree = function(p, q) {
    let res = true;
    let preOrder = (node1, node2) => {
        if (!res || (!node1 && !node2)) {
            return;
        }
        if ((node1 && !node2) || (!node1 && node2)) {
            res = false;
            return;
        }
        if (node1.val !== node2.val) {
            res = false;
        }
        preOrder(node1.left, node2.left);
        preOrder(node1.right, node2.right);
    };

    preOrder(p, q);

    return res;
};
