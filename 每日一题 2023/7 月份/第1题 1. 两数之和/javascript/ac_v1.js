/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const index = new Array(nums.length).fill(0).map((_, i) => i);
    index.sort((i1, i2) => nums[i1] - nums[i2]);

    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const sum = nums[index[left]] + nums[index[right]];
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [index[left], index[right]];
        }
    }    
};
