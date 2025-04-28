/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const total = nums.length;
    let res = 0;
    let sum = 0;
    let left = 0;
    let right = 0;

    while (right < total) {
        sum += nums[right];
        while (sum * (right - left + 1) >= k) {
            sum -= nums[left];
            left++;
        }
        res += right - left + 1;
        right++;
    }

    return res;
};
