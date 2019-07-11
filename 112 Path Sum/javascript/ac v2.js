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
 * @Runtime 64 ms, faster than 80.56% of JavaScript online submissions for Path Sum.
 * @Memory_Usage 37.3 MB, less than 52.95% of JavaScript online submissions for Path Sum.
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
