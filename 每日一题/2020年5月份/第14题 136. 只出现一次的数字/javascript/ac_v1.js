/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;

    nums.forEach((val) => {
        res ^= val;
    });

    return res;
};
