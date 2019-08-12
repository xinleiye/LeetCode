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
 * @Runtime 100 ms, faster than 6.18% of JavaScript online submissions for Diameter of Binary Tree.
 * @Memory_Usage 37.1 MB, less than 62.50% of JavaScript online submissions for Diameter of Binary Tree.
 */
var diameterOfBinaryTree = function(root) {
    let res = 0;
    let sumDepth;
    let nodes = [];

    if (!root ) {
        return 0;
    } else {
        nodes.push(root);
    }
    while (nodes.length) {
        let node = nodes.shift();
        sumDepth = getDepth(node.left) + getDepth(node.right);
        if (sumDepth > res) {
            res = sumDepth;
        }
        if (node.left) {
            nodes.push(node.left);
        }
        if (node.right) {
            nodes.push(node.right);
        }
    }

    return res;
};

function getDepth (node) {
    if (!node) {
        return 0;
    }
    return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
}
