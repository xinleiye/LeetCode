/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
    let res = 0;

    for (const n of nums) {
        res ^= n;
    }

    return res;
};
