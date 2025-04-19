/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let res = 0;
    const total = nums.length;

    for (let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            if (nums[i] === nums[j] && (i * j) % k === 0) {
                res++;
            }
        }
    }

    return res;
};
