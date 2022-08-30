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
var insertIntoMaxTree = function(root, val) {
    if (val > root.val) {
        return new TreeNode(val, root);
    }

    let parent = null;
    let cur = root;
    while (cur) {
        if (val > cur.val) {
            parent.right = new TreeNode(val, cur);

            return root;
        } else {
            parent = cur;
            cur = cur.right;
        }
    }
    parent.right = new TreeNode(val);

    return root;
};
