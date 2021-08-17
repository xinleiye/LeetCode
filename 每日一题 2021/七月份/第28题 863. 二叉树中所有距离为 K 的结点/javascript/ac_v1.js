/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const res = [];
    const parentNodeMap = new Map();
    const getParent = (node) => {
        if (node.left) {
            parentNodeMap.set(node.left.val, node);
            getParent(node.left);
        }
        if (node.right) {
            parentNodeMap.set(node.right.val, node);
            getParent(node.right);
        }
    };
    const getResult = (node, parent, dis) => {
        if (node === null) {
            return;
        }
        if (dis === k) {
            res.push(node.val);
            return;
        }
        if (node.left !== parent) {
            getResult(node.left, node, dis + 1);
        }
        if (node.right !== parent) {
            getResult(node.right, node, dis + 1);
        }
        if (parentNodeMap.get(node.val) !== parent) {
            getResult(parentNodeMap.get(node.val), node, dis + 1);
        }
    };

    getParent(root);
    parentNodeMap.set(root.val, null);
    getResult(target, null, 0);

    return res;
};
