/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;

    for (const n of nums) {
        res ^= n;
    }

    return res;
};
