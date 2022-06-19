/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    let target = root;
    let parent = root;

    // 查找要删除的节点
    while (target) {
        if (target.val === key) {
            break;
        } else if (target.val > key) {
            parent = target;
            target = target.left;
        } else if (target.val < key) {
            parent = target;
            target = target.right;
        }
    }


    if (!target) {
        return root;
    } else if (!target.left && !target.right) {
        if (parent === target) {
            root = null;
        } else if (parent.left ===target) {
            parent.left = null;
        } else {
            parent.right = null;
        }
    } else if (!target.left && target.right) {
        if (parent === target) {
            root = target.right;
        } else if (parent.left === target) {
            parent.left = target.right;
        } else {
            parent.right = target.right;
        }
        target.right = null;
    } else if (target.left && !target.right) {
        if (parent === target) {
            root = target.left;
        } else if (parent.left === target) {
            parent.left = target.left;
        } else {
            parent.right = target.left;
        }
        target.left = null
    } else {
        let node;

        parent = target;
        node = target.right;
        // 查找要删除节点的直接后继
        while (node.left) {
            parent = node;
            node = node.left;
        }

        target.val = node.val;
        if (parent.left === node) {
            parent.left = node.right;
        } else {
            parent.right = node.right;
        }
        node.right = null;
    }

    return root;
};
