/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    const total = nums.length;
    let index = 1;

    while (index < total) {
        let len = 1;

        while (index < total && nums[index] > nums[index - 1]) {
            len++;
            index++;
        }
        if (len >= k * 2) {
            return true;
        }
        if (len >= k) {
            len = 1;
            index++;
            while (index < total && nums[index] > nums[index - 1]) {
                len++;
                index++;
            }
            if (len >= k) {
                return true;
            }
        }
        index++;
    }

    return false;
};
