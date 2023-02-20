/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    const nums = String(num).split("").map(ch => Number(ch));
    const total = nums.length;
    let max = 0;
    let min = 0;
    let index = 0;

    while (index < total && nums[index] === 9) {
        index++;
    }
    for (let i = 0; i < total; i++) {
        max = max * 10 + (nums[i] === nums[index] ? 9 : nums[i]);
        min = min * 10 + (nums[i] === nums[0] ? 0 : nums[i]);
    }

    return max - min;
};
