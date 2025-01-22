/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let res = nums[0];

    for (const n of nums) {
        const n1 = Math.abs(n);
        const r1 = Math.abs(res);

        if (n1 < r1) {
            res = n;
        } else if (n1 === r1) {
            res = Math.max(res, n);
        }
    }

    return res;
};
