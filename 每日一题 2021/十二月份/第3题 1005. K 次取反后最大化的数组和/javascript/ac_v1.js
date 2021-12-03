/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    let sum = 0;
    const total = nums.length;
    let index = 0;

    nums.sort((val1, val2) => val1 - val2);
    while (k > 0 && index < total && nums[index] < 0) {
        nums[index] = -nums[index];
        index++;
        k--;
    }
    if (k > 0 && k % 2) {
        nums.sort((val1, val2) => val1 - val2);
        nums[0] = -nums[0];
    }
    nums.forEach(val => {
        sum += val;
    });

    return sum;
};
