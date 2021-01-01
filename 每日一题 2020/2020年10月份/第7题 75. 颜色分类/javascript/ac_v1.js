/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let pRed = 0;
    let pBlue = nums.length - 1;
    const red = 0;
    const blue = 2

    for (let i = 0; i <= pBlue; i++) {
        while (i <= pBlue && nums[i] === blue) {
            nums[i] = nums[pBlue];
            nums[pBlue] = blue;
            pBlue--;
        }
        if (nums[i] === red) {
            nums[i] = nums[pRed];
            nums[pRed] = red;
            pRed++;
        }
    }
};
