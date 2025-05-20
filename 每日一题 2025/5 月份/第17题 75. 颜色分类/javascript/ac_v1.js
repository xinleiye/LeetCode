/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p2 = nums.length - 1;
    let p0 = 0;

    for (let i = 0; i <= p2; i++) {
        while (i <= p2 && nums[i] === 2) {
            nums[i] = nums[p2];
            nums[p2] = 2;
            p2--;
        }
        if (nums[i] === 0) {
            nums[i] = nums[p0];
            nums[p0] = 0;
            p0++;
        }
    }    
};
