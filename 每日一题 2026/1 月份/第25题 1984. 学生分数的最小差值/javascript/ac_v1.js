/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((n1, n2) => n1 - n2);

    let right = k - 1;
    const total = nums.length;
    let res = 1e5;
    while (right < total) {
        res = Math.min(res, nums[right] - nums[right - k + 1]);
        right++;
    }

    return res;
};
