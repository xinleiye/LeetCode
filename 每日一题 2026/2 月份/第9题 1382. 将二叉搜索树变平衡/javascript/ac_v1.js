/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const vals = [];
    const inOrder = (node, cache) => {
        if (!node) {
            return;
        }
        inOrder(node.left, cache);
        cache.push(node.val);
        inOrder(node.right, cache);
    }
    inOrder(root, vals);

    const creatTree = (vals, left, right) => {
        if (left > right) {
            return null;
        }

        const mid = (left + right) >>> 1;
        const node = new TreeNode(vals[mid]);
        node.left = creatTree(vals, left, mid - 1);
        node.right = creatTree(vals, mid + 1, right);

        return node;
    }

    return creatTree(vals, 0, vals.length - 1);
};
