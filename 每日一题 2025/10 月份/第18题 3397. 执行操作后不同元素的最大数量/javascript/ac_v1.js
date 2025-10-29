/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    nums.sort((n1, n2) => n1 - n2);

    let res = 0;
    let pre = Number.MIN_SAFE_INTEGER;
    for (const n of nums) {
        const cur = Math.min(n + k, Math.max(pre + 1, n - k));

        if (cur > pre) {
            res++;
            pre = cur;
        }
    }

    return res;
};
