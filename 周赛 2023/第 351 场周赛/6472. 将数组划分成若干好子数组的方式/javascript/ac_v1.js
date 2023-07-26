/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function(nums) {
    const oneIndex = [];
    const total = nums.length;
    for (let i = 0; i < total; i++) {
        if (nums[i] === 1) {
            oneIndex.push(i);
        }
    }
    if (oneIndex.length === 0) {
        return 0;
    }

    const MOD = 1e9 + 7;
    const oneCount = oneIndex.length;
    let res = 1;
    for (let i = 1; i < oneCount; i++) {
        res = (res * (oneIndex[i] - oneIndex[i - 1])) % MOD;
    }

    return res;
};
