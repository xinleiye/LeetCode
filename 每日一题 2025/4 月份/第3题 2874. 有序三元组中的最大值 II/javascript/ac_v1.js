/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let res = 0;
    let iMax = 0;
    let dMax = 0;
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        res = Math.max(res, dMax * nums[i]);
        dMax = Math.max(dMax, iMax - nums[i]);
        iMax = Math.max(iMax, nums[i]);
    }

    return res;
};
