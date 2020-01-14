/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = -Infinity;
    let max = 1;
    let min = 1;

    for (let item of nums) {
        if (item < 0) {
            let tmp = min;

            min = max;
            max = tmp;
        }
        max = Math.max(max * item, item);
        min = Math.min(min * item, item);
        res = Math.max(res, max);
    }

    return res;
};
