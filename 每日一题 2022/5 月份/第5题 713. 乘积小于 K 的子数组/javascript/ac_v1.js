/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0;
    let left = 0;
    let prod = 1;
    const total = nums.length;

    for (let right = 0; right < total; right++) {
        prod *= nums[right];
        while (left <= right && prod >= k) {
            prod /= nums[left];
            left++;
        }
        res += right - left + 1;
    }

    return res;
};
