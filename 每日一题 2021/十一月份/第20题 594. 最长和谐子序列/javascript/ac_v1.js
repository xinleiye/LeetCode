/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let res = 0;
    let left = 0;
    const length = nums.length;

    nums.sort((val1, val2) => val1 - val2);
    for (let right = 0; right < length; right++) {
        while (nums[right] - nums[left] > 1) {
            left++;
        }
        if (nums[right] - nums[left] === 1) {
            res = Math.max(res, right - left + 1);
        }
    }

    return res;
};
