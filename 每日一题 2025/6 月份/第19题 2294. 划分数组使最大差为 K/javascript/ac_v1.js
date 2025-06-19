/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    const total = nums.length;
    let res = 0;
    let left = 0;
    let right = 0;

    nums.sort((n1, n2) => n1 - n2);
    while (right < total) {
        while (right < total && nums[right] - nums[left] <= k) {
            right++;
        }
        res++;
        left = right;
    }

    return res;
};
