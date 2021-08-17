/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let res = 0;
    const length = nums.length;
    let diff = 0;
    let count = 0;

    if (length < 3) {
        return 0
    }

    diff = nums[0] - nums[1];
    for (let i = 2; i < length; i++) {
        if (nums[i - 1] - nums[i] === diff) {
            count++;
        } else {
            diff = nums[i - 1] - nums[i];
            count = 0;
        }
        res += count;
    }

    return res;
};
