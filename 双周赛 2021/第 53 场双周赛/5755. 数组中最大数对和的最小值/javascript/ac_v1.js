/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let res = 0;
    const length = nums.length;

    nums.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < length / 2; i++) {
        res = Math.max(res, nums[i] + nums[length - 1 - i]);
    }

    return res;
};
