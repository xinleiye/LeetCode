/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    let preSum = 0;
    const sum = nums.reduce((n1, n2) => n1 + n2);
    let res = 0;

    for (const n of nums) {
        if (n) {
            preSum += n;
        } else {
            if (preSum === sum - preSum) {
                res += 2;
            } else if (Math.abs(sum - preSum * 2) === 1) {
                res += 1;
            }
        }
    }

    return res;
};
