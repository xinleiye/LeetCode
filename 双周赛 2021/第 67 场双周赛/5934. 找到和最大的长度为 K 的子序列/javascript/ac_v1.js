/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const res = new Array(k).fill(0);
    const indexArr = new Array(nums.length);
    const total = nums.length;
    const resIndex = new Array(k);

    for (let i = 0; i < total; i++) {
        indexArr[i] = i;
    }
    indexArr.sort((i1, i2) => nums[i2] - nums[i1]);
    for (let i = 0; i < k; i++) {
        resIndex[i] = indexArr[i];
    }
    resIndex.sort((val1, val2) => val1 - val2);
    for (let i = 0; i < k; i++) {
        res[i] = nums[resIndex[i]];
    }

    return res;
};
