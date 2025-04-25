/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    let res = 0;
    const countMap = new Map();
    let pre = 0;

    countMap.set(0, 1);
    for (const n of nums) {
        pre += n % modulo === k ? 1 : 0;
        res += countMap.get((pre - k + modulo) % modulo) || 0;
        countMap.set(pre % modulo, (countMap.get(pre % modulo) || 0)+ 1);
    }

    return res;
};
