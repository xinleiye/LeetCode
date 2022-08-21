/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const generateTree = (left, right) => {
        if (right < left) {
            return null;
        }

        let index = left;
        let max = nums[left];
        for (let i = left; i <= right; i++) {
            if (nums[i] > max) {
                max = nums[i];
                index = i;
            }
        }

        const node = new TreeNode(max);
        node.left = generateTree(left, index - 1);
        node.right = generateTree(index + 1, right);

        return node;
    };

    return generateTree(0, nums.length - 1);
};
