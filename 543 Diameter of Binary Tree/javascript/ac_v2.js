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
 * @Runtime 56 ms, faster than 95.73% of JavaScript online submissions for Diameter of Binary Tree.
 * @Memory_Usage 37.1 MB, less than 37.50% of JavaScript online submissions for Diameter of Binary Tree.
 */
var diameterOfBinaryTree = function(root) {
    let res = 1;

    function getDepth (node) {
        let lDepth;
        let rDepth;

        if (!node) {
            return 0;
        }

        lDepth = getDepth(node.left);
        rDepth = getDepth(node.right);

        res = Math.max(lDepth + rDepth + 1, res);

        return Math.max(lDepth, rDepth) + 1;
    }

    getDepth(root);

    return res - 1;
};
