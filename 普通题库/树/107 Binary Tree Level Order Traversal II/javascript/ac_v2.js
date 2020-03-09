/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = [];
    let nodes = [];
    let preOrder = (node, nodes, depth) => {
        if (!node) {
            return 0;
        }
        if (nodes.length < depth) {
            nodes.push([]);
        }

        nodes[depth - 1].push(node.val);

        preOrder(node.left, nodes, depth + 1);
        preOrder(node.right, nodes, depth + 1);
    };

    if (!root) {
        return [];
    }

    preOrder(root, res, 1);

    return res.reverse();
};
