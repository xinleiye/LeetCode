/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    const total = nums.length;
    let index = 0;
    let res = 0;

    while (index < total) {
        if (nums[index] % 2 === 0 && nums[index] <= threshold) {
            let start = index;

            index++;
            while (index < total && nums[index] % 2 !== nums[index - 1] % 2 && nums[index] <= threshold) {
                index++;
            }
            res = Math.max(res, index - start);
        } else {
            index++;
        }
    }

    return res;
};
