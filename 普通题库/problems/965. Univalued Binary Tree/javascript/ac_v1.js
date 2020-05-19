/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let res = true;
    let nodes = [];
    let rootVal = root.val;

    nodes.push(root);
    while (nodes.length) {
        let node = nodes.shift();

        if (node.val !== rootVal) {
            res = false;
            break;
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
