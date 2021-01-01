/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    let isSameTree = (nodes, nodet) => {
        if (!nodes && !nodet) {
            return true;
        }
        if (!nodes || !nodet || nodes.val !== nodet.val) {
            return false;
        }
        return isSameTree(nodes.left, nodet.left) && isSameTree(nodes.right, nodet.right);
    };
    let preOrder = (roots, roott) => {
        let ret;

        if (!roots) {
            return false;
        }
        if (roots.val === roott.val) {
            ret = isSameTree(roots, roott);
            if (ret) {
                return true;
            }
        }
        ret = preOrder(roots.left, roott);
        if (ret) {
            return true;
        }
        ret = preOrder(roots.right, roott);
        if (ret) {
            return true;
        }

        return false;
    };

    return preOrder(s, t);
};
