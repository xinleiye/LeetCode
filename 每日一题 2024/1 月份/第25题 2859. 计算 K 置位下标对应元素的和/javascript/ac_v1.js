/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let res = 0;
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        if (bitOneCount(i) === k) {
            res += nums[i];
        }
    }

    return res;
};

function bitOneCount(num) {
    let count = 0;

    while (num) {
        if (num & 1) {
            count++;
        }
        num = num >>> 1;
    }

    return count;
}
