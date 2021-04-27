/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let res = 0;
    let inOrder = (node) => {
        if (!node) {
            return;
        }
        if (node.val >= low) {
            inOrder(node.left)
        }
        if (node.val >= low && node.val <= high) {
            res += node.val;
        }
        if (node.val <= high) {
            inOrder(node.right);
        }
    };

    inOrder(root);

    return res;
};
