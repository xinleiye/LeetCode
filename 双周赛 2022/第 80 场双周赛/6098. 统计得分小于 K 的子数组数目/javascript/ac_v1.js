/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const length = nums.length;
    const preSum = new Array(nums.length + 1);
    preSum[0] = 0;
    for (let i = 0; i < length; i++) {
        preSum[i + 1] = preSum[i] + nums[i];
    }

    let res = 0;
    let left = 1;
    let right = 1;
    while (right <= length) {
        let score = (preSum[right] - preSum[left - 1]) * (right - left + 1);
        if (score >= k) {
            while (left <= right && score >= k) {
                left++;
                score = (preSum[right] - preSum[left - 1]) * (right - left + 1);
            }
        } else {
            res += right - left + 1;
            right++;
        }
    }

    return res;
};
