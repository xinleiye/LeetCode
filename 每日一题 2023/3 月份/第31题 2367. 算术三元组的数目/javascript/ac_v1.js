/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    const MAX = 201;
    const numArr = new Array(MAX).fill(0);
    let res = 0;

    for (const n of nums) {
        numArr[n]++;
    }
    for (const n of nums) {
        if (numArr[n] && numArr[n + diff] && numArr[n + diff * 2]) {
            res++;
        }
    }

    return res;
};
