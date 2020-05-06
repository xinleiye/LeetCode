/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let res = 0;
    let nodes = [];
    let childrens = [];
    let node;

    function getPathSum (root, sum) {
        if (root.val === sum) {
            res++;
        }
        if (root.left) {
            getPathSum(root.left, sum - root.val);
        }
        if (root.right) {
            getPathSum(root.right, sum - root.val);
        }
    }

    if (!root) {
        return 0;
    }
    nodes.push(root);
    while (nodes.length) {
        node = nodes.shift();
        getPathSum(node, sum);
        if (node.left) {
            childrens.push(node.left);
        }
        if (node.right) {
            childrens.push(node.right);
        }
        if (!nodes.length) {
            nodes = childrens;
            childrens = [];
        }
    }

    return res;
};
