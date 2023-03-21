/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const sumMap = new Map();
    const total = nums.length;
    let kIndex = 0;
    let res = 0;
    let sum = 0;

    sumMap.set(0, 1);
    for (let i = 0; i < total; i++) {
        if (nums[i] === k) {
            kIndex = i;
            break;
        }
    }
    for (let i = 0; i < total; i++) {
        sum += nums[i] === k ? 0 : (nums[i] > k ? 1 : -1);
        if (i < kIndex) {
            if (sumMap.has(sum)) {
                sumMap.set(sum, sumMap.get(sum) + 1);
            } else {
                sumMap.set(sum, 1);
            }
        } else {
            res += (sumMap.has(sum) ? sumMap.get(sum) : 0) + (sumMap.has(sum - 1) ? sumMap.get(sum - 1) : 0);
        }
    }

    return res;
};
