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
