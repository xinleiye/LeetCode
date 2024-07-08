/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    const total = nums.length;

    for (const n of nums) {
        rightSum += n;
    }
    for (let i = 0; i < total; i++) {
        rightSum -= nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};
