/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let res = 0;
    let length = nums.length;

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < length; i += 2) {
        res += nums[i];
    }

    return res;
};
