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
 * @Runtime 68 ms, faster than 72.93% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
 * @Memory_Usage 37.7 MB, less than 55.59% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
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
