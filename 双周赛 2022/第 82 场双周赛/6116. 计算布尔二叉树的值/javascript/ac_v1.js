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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    const dfsSearch = (node) => {
        if (!node.left && !node.right) {
            return Boolean(node.val);
        }
        const leftVal = dfsSearch(node.left);
        const rightVal = dfsSearch(node.right);
        if (node.val === 2) {
            return leftVal || rightVal;
        } else {
            return leftVal && rightVal;
        }
    };
    
    return dfsSearch(root);
};
