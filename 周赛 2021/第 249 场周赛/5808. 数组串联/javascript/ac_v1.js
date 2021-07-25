/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const res = new Array(nums.length);
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        res[i] = nums[i];
        res[i + length] = nums[i];
    }

    return res;
};
