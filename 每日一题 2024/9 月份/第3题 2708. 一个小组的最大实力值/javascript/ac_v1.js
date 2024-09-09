/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function(nums) {
    let max = nums[0];
    let min = nums[0];
    const total = nums.length;

    for (let i = 1; i < total; i++) {
        const tmpMax = max;
        const cur = nums[i];

        max = Math.max(max, cur, max * cur, min * cur);
        min = Math.min(min, cur, tmpMax * cur, min * cur);
    }

    return Math.max(max, min);
};
