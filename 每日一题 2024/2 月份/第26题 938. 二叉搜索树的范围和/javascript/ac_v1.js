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
    const vals = [];
    let res = 0;

    inOrder(root, vals);
    for (const n of vals) {
        if (n >= low && n <= high) {
            res += n;
        }
    }

    return res;
};

function inOrder(node, buffer) {
    if (!node) {
        return;
    }
    inOrder(node.left, buffer);
    buffer.push(node.val);
    inOrder(node.right, buffer);
}
