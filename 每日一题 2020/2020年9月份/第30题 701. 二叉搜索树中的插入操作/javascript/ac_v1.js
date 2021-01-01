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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let parent;
    let node = root;

    while (node) {
        parent = node;
        if (node.val > val) {
            node = node.left;
        } else if (node.val < val) {
            node = node.right;
        }
    }

    if (parent) {
        if (parent.val > val) {
            parent.left = new TreeNode(val);
        } else {
            parent.right = new TreeNode(val);
        }
    } else {
        root = new TreeNode(val);
    }

    return root;
};
