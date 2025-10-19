/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    const total = nums.length;
    const sum = nums.slice();

    for (let i = 0; i < total; i++) {
        for (let j = 0; j < total - 1 - i; j++) {
            sum[j] = (sum[j] + sum[j + 1]) % 10;
        }
    }

    return sum[0];
};
