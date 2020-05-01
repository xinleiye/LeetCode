/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let res = false;

    function getSum (root, total) {
        let current;
        
        if (!root) {
            return false;
        }
        
        current = total + root.val;
        
        getSum(root.left, current);
        getSum(root.right, current);

        if (sum === current && !root.left && !root.right) {
            res = true;
        }
    }
    
    getSum(root, 0);
    
    return res;
};
