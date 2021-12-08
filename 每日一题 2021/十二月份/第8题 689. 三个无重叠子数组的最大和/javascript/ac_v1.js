/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    const res = [0, 0, 0];
    let sum1 = 0, maxSum1 = 0, maxSum1Index = 0;
    let sum2 = 0, maxSum12 = 0, maxSum12Index1 = 0, maxSum12Index2 = 0;
    let sum3 = 0, maxSum123 = 0;

    for (let i = k * 2; i < nums.length; i++) {
        sum1 += nums[i - k * 2];
        sum2 += nums[i - k];
        sum3 += nums[i];
        if (i >= k * 3 - 1) {
            if (sum1 > maxSum1) {
                maxSum1 = sum1;
                maxSum1Index = i - (k * 3 - 1);
            }
            if (maxSum1 + sum2 > maxSum12) {
                maxSum12 = maxSum1 + sum2;
                maxSum12Index1 = maxSum1Index;
                maxSum12Index2 = i - (k * 2 - 1);
            }
            if (maxSum12 + sum3 > maxSum123) {
                maxSum123 = maxSum12 + sum3;
                res[0] = maxSum12Index1;
                res[1] = maxSum12Index2;
                res[2] = i - (k - 1);
            }
            sum1 -= nums[i - (k * 3 - 1)];
            sum2 -= nums[i - (k * 2 - 1)];
            sum3 -= nums[i - (k - 1)];
        }
    }

    return res;
};
