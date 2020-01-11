/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let res = 0;
    let maxTreeDeep = 1;
    let getDepth = (node, deep) => {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            maxTreeDeep = Math.max(maxTreeDeep, deep);
        }
        getDepth(node.left, deep + 1);
        getDepth(node.right, deep + 1);
    };
    let getSum = (node, deep) => {
        if (!node) {
            return;
        }
        if (deep === maxTreeDeep) {
            res += node.val;
        } else {
            getSum(node.left, deep + 1);
            getSum(node.right, deep + 1);
        }
    };

    getDepth(root, 1);
    getSum(root, 1);
    
    return res;
};
