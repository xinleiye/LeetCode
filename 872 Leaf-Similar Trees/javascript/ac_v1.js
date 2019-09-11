/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let leafs = [];
    let getLeaf = function (node) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            leafs.push(node.val);
        }
        getLeaf(node.left);
        getLeaf(node.right);
    }

    getLeaf(root1);
    getLeaf(root2)
    if (leafs.length % 2) {
        return false;
    }
    for (let i = 0, len = leafs.length / 2; i < len; i++) {
        if (leafs[i] !== leafs[len + i]) {
            return false;
        }
    }
    return true;
};
