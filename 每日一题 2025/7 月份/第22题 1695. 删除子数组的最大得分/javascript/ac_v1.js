/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let res = 0;
    let left = 0;
    let right = 0;
    let set = new Set();
    const total = nums.length;
    let sum = 0;

    while (right < total) {
        while (left < right && set.has(nums[right])) {
            set.delete(nums[left]);
            sum -= nums[left];
            left++;
        }
        set.add(nums[right]);
        sum += nums[right];
        right++;
        res = Math.max(res, sum);
    }

    return res;
};
