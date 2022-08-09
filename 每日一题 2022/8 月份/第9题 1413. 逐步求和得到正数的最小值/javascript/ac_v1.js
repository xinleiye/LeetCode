/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let res = 1;
    let totalSum = 0;

    for (const n of nums) {
        totalSum += n;
        if (totalSum <= 0) {
            res = Math.max(res, 1- totalSum);
        }
    }

    return res;
};
