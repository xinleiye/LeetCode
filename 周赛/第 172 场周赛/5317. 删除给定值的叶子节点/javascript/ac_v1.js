/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    let res;
    let deleted = true;
    let deleteNode = (parent, child, direct) => {
        if (!child) {
            return;
        }
        if (child.val === target && child.left === null && child.right === null) {
            if (direct === 1) {
                parent.left = null;
            } else if (direct === 2) {
                parent.right = null;
            }
            deleted = true;
            return;
        }
        deleteNode(child, child.left, 1);
        deleteNode(child, child.right, 2);
    };

    while (deleted) {
        deleted = false;
        deleteNode(root, root.left, 1);
        deleteNode(root, root.right, 2);
    }

    if (root.left === null && root.right === null && root.val === target) {
        res = null;
    } else {
        res = root;
    }

    return res;
};
