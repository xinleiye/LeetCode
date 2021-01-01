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
var countNodes = function(root) {
    let res = 0;
    let nodes = [];

    if (!root) {
        return res;
    }

    nodes.push(root);
    while (nodes.length) {
        let node = nodes.pop();

        if (node.left) {
            nodes.push(node.left);
        }
        if (node.right) {
            nodes.push(node.right);
        }
        res++;
    }

    return res;
};
