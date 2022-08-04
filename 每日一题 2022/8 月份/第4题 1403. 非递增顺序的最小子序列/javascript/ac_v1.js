/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let totalSum = 0;
    for (const n of nums) {
        totalSum += n;
    }

    const total = nums.length;
    let subSum = 0;
    nums.sort((n1, n2) => n2 - n1);
    for (let i = 0; i < total; i++) {
        subSum += nums[i];
        if (subSum > totalSum - subSum) {
            return nums.slice(0, i + 1);
        }
    }
};
