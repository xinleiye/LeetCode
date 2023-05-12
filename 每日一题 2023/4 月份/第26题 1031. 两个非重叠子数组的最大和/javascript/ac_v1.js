/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    const total = nums.length;
    const preSum = new Array(total + 1);;

    preSum[0] = 0;
    for (let i = 0; i < total; i++) {
        preSum[i + 1] = nums[i] + preSum[i];
    }

    return Math.max(generateSum(preSum, firstLen, secondLen), generateSum(preSum, secondLen, firstLen));
};

function generateSum(sum, len1, len2) {
    let res = 0;
    let maxSum1 = 0;
    const total = sum.length;

    for (i = len1 + len2; i < total; i++) {
        maxSum1 = Math.max(maxSum1, sum[i - len2] - sum[i - len2 - len1]);
        res = Math.max(res, maxSum1 + sum[i] - sum[i - len2]);
    }

    return res;
}
