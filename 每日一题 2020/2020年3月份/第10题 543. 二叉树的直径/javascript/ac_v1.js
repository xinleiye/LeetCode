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
var diameterOfBinaryTree = function(root) {
    let res = 0;
    let getDepth = (node) => {
        let leftDepth;
        let rightDepth;

        if (!node) {
            return 0;
        }

        leftDepth = getDepth(node.left);
        rightDepth = getDepth(node.right);

        res = Math.max(leftDepth + rightDepth, res);

        return Math.max(leftDepth, rightDepth) + 1;
    };

    getDepth(root);

    return res;
};
