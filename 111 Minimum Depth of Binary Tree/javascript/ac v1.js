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
 * @Runtime 60 ms, faster than 85.41% of JavaScript online submissions for Minimum Depth of Binary Tree.
 * @Memory_Usage 37.3 MB, less than 50.26% of JavaScript online submissions for Minimum Depth of Binary Tree.
 */
var minDepth = function(root) {
    let res = 0;
    let nodes = [];
    let node;

    if (!root) {
        return 0;
    }

    nodes.push(root);
    while(nodes.length) {
        res++;
        for (let i = 0, len = nodes.length; i < len; i++) {
            node = nodes.shift();
            if (!node.left && !node.right) {
                return res;
            }
            if (node.left) {
                nodes.push(node.left);
            }
            if (node.right) {
                nodes.push(node.right);
            }
        }
    }
};
