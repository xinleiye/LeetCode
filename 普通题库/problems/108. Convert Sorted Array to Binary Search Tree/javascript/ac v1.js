/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function bst (nums, start, end) {
        let node;
        let mid;
        
        if (start >= end) {
            return null;
        }
        
        mid = Math.floor((start + end) / 2);
        node = new TreeNode(nums[mid]);
        node.left = bst(nums, start, mid);
        node.right = bst(nums, mid + 1, end);
        
        return node;
    }
    
    return bst(nums, 0, nums.length);
};
