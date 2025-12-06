/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let sum = nums.reduce((n, s) => n + s);
    let preSum = 0;
    let res = sum % 2 ? 0 : -1;

    for (const n of nums) {
        preSum += n;
        sum -= n;
        if ((sum - preSum) % 2 === 0) {
            res++;
        }
    }

    return res;
};
