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
        const n = nums[i];

        max = Math.max(max, n, max * n, min * n);
        min = Math.min(min, n, tmpMax * n, min * n);
    }

    return max;
};
